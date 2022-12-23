require_relative 'building'

class SkyScrapper < Building

  def type_of_owner
    if @length > 50
      "this #{self.name.capitalize} is for spider man"
    else
      "This is not for spiderman"
    end
  end

end

sky = SkyScrapper.new('docklands tower', 400, 6000)
p sky.type_of_owner
