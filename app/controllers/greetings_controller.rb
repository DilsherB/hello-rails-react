class GreetingsController < ApplicationController
  def random
    greeting = Message.order("RANDOM()").first
    response_data = { greeting: greeting.greeting }

    json_response = JSON.pretty_generate(response_data)

    render json: json_response, content_type: 'application/json'
  end
end
