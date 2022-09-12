class Human
  def evolved
    'Humans evolved'
  end
end

class Person < Human
  @@persons = 0
  def initialize(id, name, age)
    @id = id
    @name = name
    @age = age
    @@persons += 1
  end

  def intro
    "His name is #{@name} and his age is #{@age}"
  end

  def self.getPersonCount
    @@persons
  end

  def evolved
    self
    'person evolved'
  end
end

person = Person.new(1, 'michael', 23)
person1 = Person.new(2, 'sarah', 23)
puts person1.intro
puts person.intro
puts Person.getPersonCount
puts person.evolved
