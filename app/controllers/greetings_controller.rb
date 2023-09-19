class GreetingsController < ApplicationController
  def random
    greeting = Message.order("RANDOM()").first
    render json: { greeting: greeting.greeting }
  end
end

# class GreetingsController < ApplicationController
#   def random
#     greeting = Message.order("RANDOM()").first
#     response_data = { greeting: greeting.greeting }

#     # Use pretty_generate to format the JSON response with indentation
#     json_response = JSON.pretty_generate(response_data)

#     # Set the content type to JSON and send the formatted JSON response
#     render json: json_response, content_type: 'application/json'
#   end
# end
