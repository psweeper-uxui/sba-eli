module Queries
  class ContentSearch < Queries::SqlBase
    def initialize(params)
      super(params)
    end

    def call
      LearningPath.find_by_sql(sql)
    end

    private

    def prepare(params)
      check_like_value(:keywords, params)
      check_array_value(:subjects, params)
      check_array_value(:media_types, params)
      check_array_value(:durations, params)
      check_single_value(:account_id, params)
      check_numeric_value(:per_page, params)
      check_numeric_value(:page, params)
      check_single_value(:workflow_state, params, "active")
    end

    def sql
      <<-SQL
        -- Search learning paths
        SELECT DISTINCT
          courses.id,
          courses.name,
          courses.course_code,
          'learning_path' AS content_type,
          courses.id AS reference_id
        FROM courses
          LEFT OUTER JOIN fearless_taggings ts
            ON ts.taggable_id = courses.id AND ts.taggable_type = 'LearningPath'
          LEFT OUTER JOIN fearless_tags t
            ON t.id = ts.tag_id
        WHERE 0=0
          #{construct_account_clause}
          #{construct_course_worklow_clause}
          #{construct_name_sql}
          #{construct_all_tags_serach('t', 'name')}
        UNION ALL
        -- Search learning objectives
        SELECT DISTINCT
          context_modules.context_id AS id,
          context_modules.name,
          courses.course_code,
          'learning_objective' AS content_type,
          context_modules.id::bigint AS reference_id
        FROM context_modules
          INNER JOIN courses
            ON courses.id = context_modules.context_id
              AND context_modules.context_type = 'Course'
          LEFT OUTER JOIN fearless_taggings ts
            ON ts.taggable_id = context_modules.id AND ts.taggable_type = 'LearningObjective'
          LEFT OUTER JOIN fearless_tags t
            ON t.id = ts.tag_id
        WHERE 0=0
          #{construct_account_clause}
          #{construct_generic_workflow_clause('context_modules')}
          #{construct_name_sql('context_modules')}
          #{construct_all_tags_serach('t', 'name')}
        UNION ALL
        -- Search learning learning_event
        SELECT DISTINCT
          content_tags.context_id,
          content_tags.title AS name,
          courses.course_code,
          'learning_event' AS content_type,
          content_tags.id::bigint AS reference_id
        FROM content_tags
          INNER JOIN courses
            ON courses.id = content_tags.context_id
              AND content_tags.context_type = 'Course'
          LEFT OUTER JOIN fearless_taggings ts
            ON ts.taggable_id = content_tags.id AND ts.taggable_type = 'LearningEvent'
          LEFT OUTER JOIN fearless_tags t
            ON t.id = ts.tag_id
        WHERE 0=0
          #{construct_account_clause}
          #{construct_generic_workflow_clause('content_tags')}
          #{construct_name_sql('content_tags', 'title')}
          #{construct_all_tags_serach('t', 'name')}
        #{construct_limit}
        #{construct_offset}
      SQL
    end

    def construct_all_tags_serach(table, field)
      sql_array = [subjects, media_types, durations].map { |a| a if a.any? }.compact
      sql_strings = sql_array.map do |values|
        "(#{construct_tag_search(table, field, values)})"
      end
      "AND " + sql_strings.join(" AND ") unless sql_strings.empty?
    end

    def construct_account_clause(table = "courses")
      "AND #{table}.account_id = #{sanitize(account_id)}" if account_id.present?
    end

    def construct_course_worklow_clause
      if workflow_state == "active"
        "AND courses.workflow_state = 'available'"
      else
        "AND courses.workflow_state != 'available'"
      end
    end

    def construct_generic_workflow_clause(table)
      if workflow_state == "active"
        "AND #{table}.workflow_state = 'active'"
      else
        "AND #{table}.workflow_state != 'active'"
      end
    end

    def construct_ilike_search(table, field, value, concat = "AND")
      "#{concat} #{table}.#{field} ILIKE '#{sanitize(value)}'" if value.present?
    end

    def construct_limit
      "LIMIT #{sanitize(per_page.to_i)}" if per_page.present?
    end

    def construct_name_sql(table = "courses", field = "name")
      construct_ilike_search(table, field, keywords)
    end

    def construct_offset
      if per_page.present?
        current_offset = page.present? ? ((page - 1) * per_page) : 0
        "OFFSET #{sanitize(current_offset)}" if [page].present?
      end
    end

    def construct_tag_search(table, field, values)
      values.map { |v| construct_ilike_search(table, field, v, "") }.join(" OR ")
    end
  end
end
