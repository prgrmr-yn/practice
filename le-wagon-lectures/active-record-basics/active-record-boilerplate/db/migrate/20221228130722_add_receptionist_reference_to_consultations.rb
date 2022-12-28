class AddReceptionistReferenceToConsultations < ActiveRecord::Migration[7.0]
  def change
    add_reference :consultations, :receptionist, foreign_key: true

  end
end
