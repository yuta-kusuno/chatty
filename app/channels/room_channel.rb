class RoomChannel < ApplicationCable::Channel
  def subscribed
    # binding.pry
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # binding.pry
    Message.create(content: data['message'])
    ApplicationCable.server.broadcast 'room_channel', data['message']
  end
end
