module RequestHelper
  def stub_authorized_request(method, url)
    stub_request(method, url).
      with(
        headers: {
          "Authorization" => "Bearer #{ENV['CANVAS_TOKEN']}",
        },
      )
  end
end
