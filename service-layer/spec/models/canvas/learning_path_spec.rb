describe "Canvas::LearningPath" do
  describe "#all" do
    it "gets a list of all the courses" do
      # this test is redundant. Probably want to replace setup with LearningPath.create

      learning_paths = LearningPath.new("FAKE_TOKEN")
      allow(learning_paths).to receive(:all).and_return(
        [
          {
            id: 1,
            name: "Avengers",
            account_id: 3,
            course_code: "Avengers",
          },
          {
            id: 2,
            name: "Justice League",
            account_id: 3,
            course_code: "JLA",
          },
        ],
      )
      expect(learning_paths.all.length).to eq(2)
    end
  end

  describe "#find" do
    it "finds a course" do
    end
  end
end
