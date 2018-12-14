require "rails_helper"

describe "Searches" do
  fixtures :all

  describe "GET /search" do
    it "gets the first page of results when no query parameters are passed" do
      get "/search"
      json = JSON.parse(response.body)

      expect(response).to be_successful
      expect(json["data"].size).to eq(20)
    end

    it "gets results sfor the last page" do
      get "/search?per_page=12&page=3"
      json = JSON.parse(response.body)

      expect(response).to be_successful
      expect(json["data"].size).to eq(7)
    end

    it "gets results for learning paths that contain the keywords" do
      get "/search?keywords=Entrepreneurial%20Leadership"
      json = JSON.parse(response.body)

      expect(response).to be_successful
      expect(json["data"].size).to eq(1)
    end
  end
end
