class Chef
  def initialize

  end

  def make_chicken
    puts 'the chef makes chicken'
  end

  def make_salad
    puts 'the chef makes salad'
  end

  def make_special_dish
    puts 'the chef make bbq ribs'
  end
end

class ItalianChef < Chef
  def make_special_dish
    super
    puts 'the italian chef make pasta'
  end
end

italy = ItalianChef.new
italy.make_special_dish
