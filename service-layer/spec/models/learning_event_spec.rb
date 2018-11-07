describe "LearningEvent" do
	describe "#all" do
		it "gets a lit of all the learning events" do
			learning_events = LearningEvent.new("FAKE_TOKEN")
			uri = ENV["CANVAS_HOST"] + "/api/v1/courses/1/pages"
			stub_request(:get, uri).with(
				headers: {"Authorization"=>"Bearer FAKE_TOKEN" }),
				to_return(status: 200, body: "hi", headers: {})
			expect(learning_events.all).to be_successful
		end
	end
end