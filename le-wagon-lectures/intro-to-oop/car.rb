class Car
  attr_reader :color
  def initialize(brand, model, color)
    @brand = brand
    @model = model
    @color = color
    @engine_started = false
  end

  def start_engine
    @engine_started = true
  end

  def engine_status?
    @engine_started
  end

end

