require_relative 'building'
require_relative 'butler'

class Castle < Building
  attr_accessor :butler
  attr_reader :butler

  def initialize(name, width, length, ruler, butler)
    super(name, width, length)
    @ruler = ruler
    @butler = Butler.new(self, butler)
    # creating a butler instance passing as an argument
  end

  def ownership_details
    "#{@name} is ruled by #{@ruler.capitalize}"
  end

  def self.categories
    ['midevil', 'norman', 'ancient']
  end

  def has_a_butler?
    @butler != nil
  end

  def floor_area
    300 + super
  end

end

castle = Castle.new("Sultan Place", 520, 500, 'Alladin', 'ram')
'Does the castle has a butler'
# castle.butler = 'Ram'
castle.has_a_butler? ? "yes butler is #{castle.butler}" : 'nah no butler sorry'

castle.butler
