class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_id, unique: true, index: true, null: false
      t.string :first_name, index: true
      t.string :last_name, index: true
      t.string :email, index: true
      t.string :profile_picture
      t.string :linked_in
      t.string :zipcode
      t.integer :percent_ownership
      t.integer :goal_percent_revenue
      t.integer :goal_revenue_amount
      t.integer :goal_percent_increase_employees
      t.integer :goal_increase_employee_amount
      t.references :race, array: true
      t.references :ethnicity
      t.references :companies, index: true

      t.timestamps
    end
  end
end
