module Canvas
  module LearningPath
    include Canvas::Base
    include HTTParty

    base_uri ENV["CANVAS_HOST"] + "/api/v1"

    def self.all
      get("/courses", base_options).body
    end

    def self.find(id)
      get("/courses/#{id}", base_options).body
    end

    def self.create(account_id, lp_params)
      options = base_options.merge!(body: lp_params)
      post("/accounts/#{account_id}\/courses", options)
    end

    def self.update(id, lp_params)
      @params = {
        "id": id,
        "course[name]": lp_params.fetch(:name, ""),
        "course[course_code]": lp_params.fetch(:course_code, ""),
      }

      options = base_options.merge!(body: @params)
      put("/courses/#{id}", options)
    end

    def self.destroy(id)
      options = base_options.merge!(body: { "event": "delete" })
      delete("/courses/#{id}", options)
    end
  end
end
