describe "LearningPath" do
  describe "#all" do
    it "gets a list of all the courses" do
      learning_paths = LearningPath.new("FAKE_TOKEN")
      uri = ENV["CANVAS_HOST"] + "/api/v1/courses"
      stub_request(:get, uri).with(
        headers: { "Authorization"=>"Bearer FAKE_TOKEN" }).
        to_return(status: 200, body: "hi", headers: {})
      expect(learning_paths.all).to be_successful
    end
  end
end
