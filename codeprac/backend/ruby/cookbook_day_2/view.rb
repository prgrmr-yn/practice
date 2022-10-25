class View
  def display_list(recipes)
    recipes.each_with_index do |recipe, index|
      puts "#{index + 1} - #{recipe.name}
      description: #{recipe.description}
      rating: #{recipe.rating} stars"
    end
  end

  def ask_for(anything)
    puts anything
    gets.chomp
  end

  def display_online_recipes(recipes, ratings)
    recipes.each_with_index do |recipe, index|
      puts "#{index + 1} - #{recipe} #{ratings[index]}/5"
    end

  end
end
