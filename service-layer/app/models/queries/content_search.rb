module Queries
  class ContentSearch < Queries::SqlBase
    def query
      CanvasCourse.find_by_sql(sql)
    end

    private

    def prepare
      check_like_value(:subject, params)
      check_array_value(:media_type, params)
      check_array_value(:duration, params)
    end

    def sql
      <<-SQL
        SELECT
          courses.id,
          courses.name,
          courses.code
        FROM courses INNER JOIN accounts
          ON courses.account_id = accounts.id
        WHERE accounts.id = #{sanitize(ENV['CANVAS_ACCOUNT_ID'])}
          #{construct_subject_sql}
      SQL
    end

    def construct_subject_sql(table = "courses", field = "name")
      "#{table}.#{field} ILIKE #{sanitize(subject)}" if subject.present?
    end
  end
end
