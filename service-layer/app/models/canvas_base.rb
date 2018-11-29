class CanvasBase < ApplicationRecord
  self.abstract_class = true

  establish_connection CANVAS_DATABASE_CONFIG
end
