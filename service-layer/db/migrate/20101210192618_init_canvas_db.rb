class InitCanvasDb < ActiveRecord::Migration[5.0]
  def up
    configuration = ActiveRecord::Base.configurations[Rails.env]
    tasks = ActiveRecord::Tasks::PostgreSQLDatabaseTasks.new(configuration)
    tasks.structure_load "db/sql/structure.sql", nil
  end
end
