class Setup < ApplicationRecord
  belongs_to :player
  has_one_attached :file
end
