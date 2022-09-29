require_relative 'house'

class Skyscrapper < House
  def type_of_owner
    if @length > 50
      "this #{self.capitalize_name} is skyscrapper for spider-end"
    else
      "this #{capitalize_name} is the beginners"
    end
  end

  def capitalize_name
    @name.capitalize
  end
end

sky =  Skyscrapper.new('Eiffel Tower', 100, 10)
