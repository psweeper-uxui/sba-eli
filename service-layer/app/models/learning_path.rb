class LearningPath
  include HTTParty
  base_uri ENV["CANVAS_HOST"] + "/api/v1"

  def initialize(session)
    @options = { headers: { "Authorization" => "Bearer " + session } }
  end

  def all
    self.class.get("/courses", @options).body
  end

  def find(id)
    self.class.get("/courses/#{id}", @options).body
  end

  def create(account_id, lp_params)
    options = @options.meger!(body: lp_params)
    self.class.post("/accounts/#{account_id}\/courses", options)
  end

  def update(id, lp_params)
    options = @options.merge!(body: lp_params)
    self.class.put("/courses/#{id}", options)
  end

  def destroy(id)
    options = @options.merge!(body: { "event": "delete" })
    self.class.delete("/courses/#{id}", options)
  end
end
