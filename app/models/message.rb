class Message < ApplicationRecord
  belongs_to :user
  validates :user_id, presence: true
  validates :content, presence: true, length: {maximum: 500}

  after_create_commit {MessageBroadcastJob.perform_later self}
end
