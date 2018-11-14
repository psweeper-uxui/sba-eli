require 'rails_helper'

describe "UserCreationService" do
  subject {
    UserCreationService.new(
      first_name: "Jane",
      last_name: "Doe",
      email: "jane.doe@example.com",
      password: "changeME123",
      password_confirmation: "changeME123"
    )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is invalid without first_name" do
    subject.first_name = nil
    expect(subject).to_not be_valid
  end

  it "is invalid without last_name" do
    subject.last_name = nil
    expect(subject).to_not be_valid
  end

  it "is invalid without a complex password" do
    subject.password = nil
    expect(subject).to_not be_valid
  end

  it "is invalid without a password_confirmation" do
    subject.password_confirmation = nil
    expect(subject).to_not be_valid
  end

  it "is invalid if password doesn't match password_confirmation" do
    subject.password_confirmation = "123ChangeME"
    expect(subject).to_not be_valid
  end

end
