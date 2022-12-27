require 'sqlite3'

DB = SQLite3::Database.new('./doctors.db')
DB.results_as_hash = true

class Doctor
  def initialize(attr={})
    @id = attr[:id]
    @first_name = attr[:first_name]
    @last_name= attr[:last_name]
    @speciality = attr[:speciality]
  end

  def self.all
    q = "SELECT * FROM doctors"
    DB.execute(q)
  end

  def self.destroy_all
    q = "DELETE FROM doctors"
    DB.execute(q)
  end

  def save
    q = "INSERT INTO doctors(first_name, last_name, speciality) VALUES (?,?,?)"
    DB.execute(q, @first_name, @last_name, @speciality)
  end
end

# first_name = gets.chomp
# last_name = 'Nagpal'
# speciality = "Laser Specialist"
# doctor  = Doctor.new(first_name: first_name, last_name: 'Nagpal', speciality: 'Laser therapist')
# p doctor.save
# p Doctor.all


def docco

  def doctor
    $choice == 1
  end

  def exitt
    $choice == 2

  end
  puts "Choose options"
  puts "1 - Create new doctor"
  puts "2 - Exit"

  print "> "
  $choice = gets.chomp.to_i

  if exitt
    puts 'Exiting.....'
    exit
  elsif doctor
    puts "First name? "
    print "> "
    first_name = gets.chomp

    puts "Last name? "
    print "> "
    last_name = gets.chomp

    puts "Speciality? "
    print "> "
    speciality = gets.chomp

    doctor = Doctor.new(first_name: first_name, last_name: last_name, speciality: speciality)
    doctor.save
  else
    puts 'Wrong input'
    docco
  end
end

docco
