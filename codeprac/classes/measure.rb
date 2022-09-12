class Box
  @@num_of_boxes = 0
  def initialize(height, width)
    @height = height
    @width = width
    @@num_of_boxes += 1
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

  def get_area
    @height * @width
  end

  def self.full_boxes
    "packed boxes till this date is #{@@num_of_boxes} boxes"
  end

end

box = Box.new(20, 23)
box1 = Box.new(30, 23)
box2 = Box.new(200, 23)
p [box, box1, box2]

p Box.full_boxes
p box.get_area
