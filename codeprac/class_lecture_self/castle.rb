require_relative 'butler'
require_relative 'house'

class Castle < House
  attr_accessor :butler, :ruler

  def initialize(name, width, length, ruler)
    super(name, width, length)
    @ruler = ruler
    @butler = Butler.new(self)
  end
  def has_a_butler?
    @butler != nil
  end

  def ownership_details
    "#{@name} is owned by #{@ruler}"
  end

  def ruler_name
    @ruler.capitalize
  end

  def floor_area
    super + 300
  end

  def self.now
    Time.now
  end

  def self.price_per_sq_metres(city)
    case city
    when 'Paris' then 9000
    when 'Brussels' then 3000
    else raise Exception.new("no data for #{city}")
    end
  end
end

aladdin = Castle.new('The sultan place', 8000, 3000, 'Aladin')



p aladdin.ownership_details
p aladdin.butler.clean_castle
