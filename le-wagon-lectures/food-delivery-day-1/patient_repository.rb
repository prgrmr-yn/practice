require 'csv'
require_relative 'patient'
require_relative 'room_repository'

class PatientRepository

  attr_reader :patients
  def initialize(csv_file, room_repository)
    @csv_file = csv_file
    @patients = []
    @room_repo = room_repository
    load_csv
  end

  def add(patient)
    patient.id = @patients.empty? ? 2 : @patients.last.id + 1
    @patients << patient
  end

  private
  def load_csv
    CSV.foreach(@csv_file, headers: :first_row, header_converters: :symbol) do |row|
      if row[:id]
        row[:id] =  row[:id].to_i
        row[:cured] = row[:cured] == 'true'
        patient = Patient.new(row)
        room = @room_repo.find(row[:room_id].to_i)
        patient.room = room
        @patients << patient

      end
    end

  end
end


room_repo = RoomRepository.new('./rooms.csv')

repo = PatientRepository.new('./patients.csv', room_repo)
anne = Patient.new(name: 'anne')
repo.add(anne)
annee = Patient.new(name: 'annee')
repo.add(annee)
anneee = Patient.new(name: 'anneee')
repo.add(anneee)
