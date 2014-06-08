class MainController < ApplicationController

  def index
  end

  def profile
    info = client.user("victor")
    render json: info
  end

  def timeline

    articles = client.user_timeline(:count => 10)
    render json: articles
  end

  private

  def client
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = OPEN_KEY
      config.consumer_secret     = SECRET_KEY
      config.access_token        = OPEN_TOKEN
      config.access_token_secret = SECRET_TOKEN
    end
  end

end
