module SecurityConcern
  extend ActiveSupport::Concern

  SESSION_KEY = :id

  included do
    before_action :authenticate_request, :valid_session?
  end

  def authenticate_request
    if session_cookie
      response = Canvas::User.read_user(session_cookie)
      Current.user = User.from_canvas_json(response)
    end
  end

  def session_cookie
    cookies.encrypted[SESSION_KEY]
  end

  def sign_in(user)
    Current.user = user
    cookies.encrypted[SESSION_KEY] = user.id
  end

  def sign_out
    cookies.delete SESSION_KEY
  end

  def valid_session?
    (head 403 && return) unless Current.user
  end

  def return_forbidden
    head 403 && return
  end

end
