class MessagesController < ApplicationController
  def create
    @message = current_user.messages.create!(message_params)

    if @message.save
      ActionCable.server.broadcast "room_channel", content: @message.content
    end
  end

  private
  def message_params
    params.require(:message).permit(:content)
  end
end
