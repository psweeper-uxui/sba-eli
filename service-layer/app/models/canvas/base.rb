module Canvas
  module Base
    def self.included(base)
      base.extend(ClassMethods)
    end

    module ClassMethods
      def session_token
        ENV["CANVAS_TOKEN"]
      end

      def canvas_host
        ENV["CANVAS_HOST"]
      end

      def base_options
        {
          headers: {
            "Authorization" => "Bearer " + session_token,
          },
        }
      end
    end
  end
end
