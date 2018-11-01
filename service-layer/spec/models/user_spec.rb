require 'rails_helper'

RSpec.describe User, type: :model do

  it "has a valid factory" do
    user = FactoryBot.build(:user)
    expect(user).to be_valid
  end

  context "When passing valid parameters to the user" do
    tmp = FactoryBot.build(:user)

    it "has a user id" do
      expect(tmp.user_id).to be_present
      #test uniqueness of the id
    end

    it "has a user's first name" do
      expect(tmp.first_name).to be_present
    end

    it "has a user's last name" do
      expect(tmp.last_name).to be_present
    end

    it "has a valid email" do
      expect(tmp.email).to be_present
      #check for @ symbol
    end

    it "has a profile picture" do
      expect(tmp.profile_picture).to be_present
    end

    it "has a LinkedIn URL" do
      expect(tmp.linked_in).to be_present
    end

    it "has a zip code" do
      expect(tmp.zipcode).to be_present
    end

    it "has a percent ownership" do
      expect(tmp.percent_ownership).to be_an_between(0, 100)
    end

    it "has a revenue percentage goal" do
      expect(tmp.goal_percent_revenue).to be_an_between(0, 100)
    end

    it "has a revenue amount goal" do
      expect(tmp.goal_revenue_amount).to be > 0
    end

    it "has an increased employee percentage goal" do
      expect(tmp.goal_percent_increase_employees).to be_an_between(0, 100)
    end

    it "has an increased employee amount goal" do
      expect(tmp.goal_increase_employee_amount).to be > 0
    end

    # race
    # ethnicity
    # company

    it "gives you the concatenated first and last name" do
      expect(tmp.full_name).to eq("#{tmp.first_name} #{tmp.last_name}")
    end
  end

  context "When passing invalid data to the user id" do
    describe User, "#user_id" do
      it "does not allow an empty user id" do
        tmp = FactoryBot.build(:user)
        expect{tmp.user_id = nil}.to raise_error
      end
    end
  end

  context "When passing invalid data to the first name" do
    describe User, "#first_name" do
      it "does not allow an empty first name" do
        tmp = FactoryBot.build(:user)
        expect{tmp.first_name = nil}.to raise_error
      end
    end
  end

  context "When passing invalid data to the last name" do
    describe User, "#last_name" do
      it "does not allow an empty last name" do
        tmp = FactoryBot.build(:user)
        expect{tmp.last_name = nil}.to raise_error
      end
    end
  end

  context "When passing invalid data to the email" do
    describe User, "#email" do
      it "does not allow an empty email" do
        tmp = FactoryBot.build(:user)
        expect{tmp.email = nil}.to raise_error
      end

      it "does not allow an email without an '@'" do
        tmp = FactoryBot.build(:user)
        expect{tmp.email = "testattest.com"}.to raise_error
      end

      it "does not allow an email with special characters" do
        tmp = FactoryBot.build(:user)
        expect{tmp.email = "test<at>test.com"}.to raise_error
      end
    end
  end
end