class CreateReceptionists < ActiveRecord::Migration[7.0]
  create_table :receptionists do |t|
    t.string :name
    t.timestamps null: false
  end
end
