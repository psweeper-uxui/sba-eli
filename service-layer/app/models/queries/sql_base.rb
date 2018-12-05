module Queries
  class SqlBase
    include Callable
    attr_reader :properties

    def initialize(params)
      @properties = {}
      prepare(params)
    end

    def method_missing(name)
      if @properties.has_key? name
        @properties[name]
      else
        super
      end
    end

    def respond_to_missing?(method_name, include_private = false)
      @properties.has_key?(method_name) || super
    end

    private

    def check_single_value(field, params, default_value = nil)
      @properties[field] = params[field] || default_value
    end

    def check_like_value(field, params, default_value = nil)
      @properties[field] = params[field].present? ? "%#{params[field]}%" : default_value
    end

    def check_array_value(field, params)
      @properties[field] = params[field].present? ? params[field].split(",") : []
    end

    def array_to_string(arr)
      arr.map { |e| "'#{sanitize(e)}'" }.join(",")
    end

    def sanitize(value)
      ActiveRecord::Base.sanitize_sql(value)
    end
  end
end
