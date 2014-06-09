class TestController < ApplicationController
  def index
  end

  def profile_by_id
    info = client.user(params[:id])
    render json: info
  end

  def layout
  end

  def find_by_param
    articles = client.search(params[:param])
    render json: articles
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

  def client_stream
    client = Twitter::Streaming::Client.new do |config|
      config.consumer_key        = OPEN_KEY
      config.consumer_secret     = SECRET_KEY
      config.access_token        = OPEN_TOKEN
      config.access_token_secret = SECRET_TOKEN
    end
  end
end
