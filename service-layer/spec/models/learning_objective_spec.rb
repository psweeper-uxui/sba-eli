describe "LearningObjective" do
    describe '#all' do
    learning_objectives = LearningObjective.new("FAKE_TOKEN")
        uri = ENV["CANVAS_HOST"] + "/api/v1/courses"
        stub_request(:get, uri).with(
            headers: { "Authorization"=>"Bearer FAKE_TOKEN" }).
            to_return(status: 200, body: "", headers: {})
        expect(learning_objectives.all).to be_successful
    end
end