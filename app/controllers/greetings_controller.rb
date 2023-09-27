class GreetingsController < ApplicationController
  def index
    greeting = Message.order('RANDOM()').first
    render json: { greeting: greeting.greeting }
  end
end
