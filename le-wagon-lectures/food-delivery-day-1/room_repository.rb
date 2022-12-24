require 'csv'
require_relative 'room'

class RoomRepository
  def initialize(csv_file)
    @csv_file = csv_file
    @rooms = []

    load_csv
  end

  def add(room)
    room.id = @rooms.empty? ? 2 : @rooms.last.id + 1
    @rooms << room
  end

  def find(index)
    @rooms[index]
  end

  def load_csv
    CSV.foreach(@csv_file, headers: :first_row, header_converters: :symbol) do |row|
      p row
      if row[:id]
        row[:id] =  row[:id].to_i
        row[:capacity] = row[:capacity].to_i
        room = Room.new(row)
        patient = row[:patient_id].to_i
        @rooms << room
      end
    end
  end
end

ro = './rooms.csv'
r = RoomRepository.new(ro)
