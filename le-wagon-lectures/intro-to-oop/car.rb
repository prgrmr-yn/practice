class Car
  attr_reader :brand, :model
  attr_accessor :color
  def initialize(brand, model, color)
    @brand = brand
    @model = model
    @color = color
    @engine_started = false
  end

  def start_engine
    p ignite_engine
    @engine_started = true
    "engine started"
  end

  def engine_status?
    @engine_started
  end

  private
  def ignite_engine
    "engine ignited"
  end
end

# Allowing user to change the color if they paint but the model name and the brand cannot change

c= Car.new('a','a', 'a')
p c.start_engine
