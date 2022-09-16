class Student
  attr_accessor :name, :major, :gpa
  def initialize(name, major, gpa)
    @name = name
    @mojor = major
    @gpa = gpa
  end

  def has_hornors?
    @gpa >= 3.5
  end
end

jim = Student.new('Jim', 'Business', 2.6)
pam = Student.new('Pam', 'Business', 3.6)

puts jim.has_hornors? ? 'jim has honors' : 'jims a loser'
puts 'yes pam has honors' if pam.has_hornors?
