require_relative 'building'

class House < Building
  def self.price_per_square(city)
    case city
    when 'paris' then 9000
    when 'brussels' then 3000
    else raise Exception.new("No data for #{city}")
    end
  end
end


house = Building.new('appartment', 100, 100)
House.price_per_square('paris')
