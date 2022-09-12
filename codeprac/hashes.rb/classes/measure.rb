class Box
  def initialize(height, width)
    @height = height
    @width = width
  end

  def get_height
    @height
  end

  def get_width
    @width
  end

  def set_height(h)
    @height = h
  end

  def set_width(w)
    @width = w
  end

  def set_height(h)
    @height = h
  end

  def getArea
    @height * @width
  end
end

p Box.new
