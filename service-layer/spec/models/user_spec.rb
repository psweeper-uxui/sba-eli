require 'rails_helper'
require 'shoulda-matchers'

RSpec.describe User, type: :model do

  it "has a valid factory" do
    user = FactoryBot.build(:user)
    expect(user).to be_valid
  end

  context "Validations" do
    #test id unique
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    #test email format
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:profile_picture) }
    it { should validate_presence_of(:linked_in) }
    it { should validate_presence_of(:zipcode) }
    it { should validate_not_zero(:percent_ownership) }


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

end