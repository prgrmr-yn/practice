class Animal
  attr_reader :type, :name

  @@all = []
  @@count = 0

  def initialize(type, name)
    @type = type
    @name = name
    @@all << self
    @@count += 1
  end

  def self.all
    @@all
  end

  def self.count
    @@count
  end

  def self.names
    @@all.map do |animal|
      animal.name
    end
  end

  def self.summary
    animals = @@all.map { |animal| "#{animal.name} " }.join


  end
end

