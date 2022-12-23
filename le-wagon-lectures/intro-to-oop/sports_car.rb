require_relative 'car'

class SportsCar < Car
  def car_kind
    'Its a sports car'
  end
end

sports_car = SportsCar.new('audi', 'r8', 'grey')
