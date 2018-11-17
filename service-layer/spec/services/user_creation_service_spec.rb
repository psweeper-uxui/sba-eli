require "rails_helper"

include CognitoFactory

describe "UserCreationService" do
  subject do
    UserCreationService.new(
      first_name: "Jane",
      last_name: "Doe",
      email: "jane.doe@example.com",
      password: "changeME123!",
      password_confirmation: "changeME123!",
    )
  end

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

  context do
    it "fails to create a user if the email is already registered" do
      subject.email = "john.doe@doe.com"
      VCR.use_cassette("failed_user_creation") do
        expect(subject.create).to be_falsey
      end
    end
  end

  context do
    before :context do
      Aws.config[:cognitoidentityprovider] = {
        stub_responses: {
          setup_user: sign_up_user("jane.doe@example.com"),
        },
      }
    end
    it "creates a new user" do
      VCR.use_cassette("successful_user_creation") do
        expect(subject.create).to be_truthy
      end
    end
  end
end
