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
        SELECT
          courses.id,
          courses.name,
          courses.course_code,
          'learning_path' AS content_type
        FROM courses INNER JOIN accounts
          ON courses.account_id = accounts.id
        WHERE accounts.id = #{sanitize(ENV['CANVAS_ACCOUNT_ID'])}
          #{construct_subject_sql}
      SQL
    end

    def construct_subject_sql(table = "courses", field = "name")
      " AND #{table}.#{field} ILIKE '#{sanitize(keywords)}'" if keywords.present?
    end
  end
end
