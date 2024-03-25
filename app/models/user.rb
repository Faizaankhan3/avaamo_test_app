class User < ApplicationRecord
  has_many :orders

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
end
