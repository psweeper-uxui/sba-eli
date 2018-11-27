class LearningEvent
  include HTTParty
  base_uri ENV["CANVAS_HOST"] + "/api/v1"

  def initialize(session)
    @options = {
      headers: {
        "Authorization" => "Bearer " + session,
        "Content-Type" => "application/json",
      },
    }
  end

  def all(course_id, module_id)
    self.class.get("/courses/#{course_id}/modules/#{module_id}/items", @options).body
  end

  def find(course_id, module_id, id)
    url = "/courses/#{course_id}/modules/#{module_id}/items/#{id}"
    learning_event = self.class.get(url, @options)

    if learning_event["url"]
      learning_event["eventContent"] = get_content(learning_event["url"])
    end

    learning_event
  end

  def update(course_id, module_id, id, le_params)
    options = @options.merge!(body: le_params.to_json)
    self.class.put("/courses/#{course_id}/modules/#{module_id}/items/#{id}", options).body
  end

  def destroy(course_id, module_id, id)
    self.class.delete("/courses/#{course_id}/modules/#{module_id}/items/#{id}", @options)
  end

  private

  def get_content(url)
    HTTParty.get(url, @options)
  end
end
