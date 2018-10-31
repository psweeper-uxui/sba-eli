class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.boolean :in_business, index:true
      t.string :company_id, unique:true, index:true
      t.string :name, index:true
      t.string :naics, array:true, index:true
      t.integer :num_employees
      t.string :website
      #t.string :industry, array:true, index:true
      t.references :industries, array:true, index: true
      #dropdown list provided by SBA but also ability to write in

      t.timestamps
    end
  end
end
