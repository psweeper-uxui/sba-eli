class LearningEvent
  include HTTParty
  base_uri ENV["CANVAS_HOST"] + "/api/v1"

  def initialize(session)
    @options = { headers: { "Authorization" => "Bearer " + session } }
  end

  def all(course_id)
    self.class.get("/courses/#{course_id}/pages", @options).body
  end

  def find(course_id, page_id)
    self.class.get("/courses/#{course_id}/pages/#{page_id}", @options).body
  end

  def update(course_id, id, lp_params)
    options = @options.merge!(body: lp_params)
    self.class.put("/courses/#{course_id}/pages/#{id}", options)
  end

  def destroy(course_id, id)
    options = @options.merge!(body: { "event": "delete" })
    self.class.delete("/courses/#{course_id}/pages/#{id}", options)
  end
end
