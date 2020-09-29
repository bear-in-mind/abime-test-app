class Player < ApplicationRecord
  belongs_to :team
  has_many :setups, dependent: :destroy

  accepts_nested_attributes_for :setups
end
