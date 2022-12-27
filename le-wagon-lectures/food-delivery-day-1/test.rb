require 'csv'
require_relative 'patient'
require_relative 'room'
require_relative 'employee'
require_relative 'patient_repository'
require_relative 'room_repository'
require_relative 'patient_repository'

rr = RoomRepository.new(File.join(__dir__, './rooms.csv'))
pr = PatientRepository.new(File.join(__dir__, './patients.csv'), rr)



