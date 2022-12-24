require 'csv'
require_relative 'patient'

patients = []
CSV.foreach('./patients.csv', headers: :first_row, header_converters: :symbol) do |row|
  if row
    row[:id] =  row[:id].to_i
    row[:cured] = row[:cured] == 'true'
    patient = Patient.new(row)
    patients << patient
  end
end
p patients
