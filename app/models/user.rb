class User < ApplicationRecord
  has_secure_password

  has_many :tasks
  has_many :task_lists, through: :tasks
  validates :username, presence: true, uniqueness: true
  # validates :password, presence: true
end
