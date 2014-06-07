class MainController < ApplicationController

  def index
  end

  def check
    render json: 'Ok'
  end

  def timeline
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = OPEN_KEY
      config.consumer_secret     = SECRET_KEY
      config.access_token        = OPEN_TOKEN
      config.access_token_secret = SECRET_TOKEN
    end
    articles = client.user_timeline(:count => 10)
    render json: { message: articles }, status: 200
  end

end
