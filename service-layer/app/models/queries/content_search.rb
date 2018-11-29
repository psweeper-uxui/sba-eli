module Queries
  class ContentSearch < Queries::SqlBase
    def initialize(params)
      super(params)
    end

    def call
      CanvasCourse.find_by_sql(sql)
    end

    private

    def prepare(params)
      check_like_value(:keywords, params)
      check_array_value(:media_type, params)
      check_array_value(:duration, params)
    end

    def sql
      <<-SQL
        -- Search learning paths
        SELECT
          courses.id,
          courses.name,
          courses.course_code,
          'learning_path' AS content_type,
          null AS reference_id
        FROM courses
        WHERE courses.account_id = #{sanitize(ENV['CANVAS_ACCOUNT_ID'])}
          AND courses.workflow_state = 'available'
          #{construct_subject_sql}
        UNION ALL
        -- Search learning objectives
        SELECT
          context_modules.context_id AS id,
          context_modules.name,
          courses.course_code,
          'learning_objective' AS content_type,
          context_modules.id AS reference_id
        FROM context_modules
          INNER JOIN courses
            ON courses.id = context_modules.context_id
              AND context_modules.context_type = 'Course'
        WHERE courses.account_id = #{sanitize(ENV['CANVAS_ACCOUNT_ID'])}
          AND context_modules.workflow_state = 'active'
          #{construct_subject_sql('context_modules')}
        UNION ALL
        -- Search learning items
        SELECT
          content_tags.context_id,
          content_tags.title AS name,
          courses.course_code,
          'learning_event' AS content_type,
          content_tags.id AS reference_id
        FROM content_tags
          INNER JOIN courses
            ON courses.id = content_tags.context_id
              AND content_tags.context_type = 'Course'
        WHERE courses.account_id = #{sanitize(ENV['CANVAS_ACCOUNT_ID'])}
          AND content_tags.workflow_state = 'active'
          #{construct_subject_sql('content_tags', 'title')}
      SQL
    end

    def construct_subject_sql(table = "courses", field = "name")
      " AND #{table}.#{field} ILIKE '#{sanitize(keywords)}'" if keywords.present?
    end
  end
end
