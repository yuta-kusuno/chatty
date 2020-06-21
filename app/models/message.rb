class Message < ApplicationRecord
  validates :content, presence: true, length: {maximum: 500}

  after_create_commit {MessageBroadcastJob.perform_later self}
end
