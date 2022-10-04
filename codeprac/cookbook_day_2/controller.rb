require_relative 'view'
require_relative 'recipe'
require_relative 'recipe_parse'

class Controller

  def initialize(cookbook)
    @view = View.new
    @cookbook = cookbook
  end

  def list
    recipes = @cookbook.all
    @view.display_list(recipes)
  end

  def create
    input = ['name', 'description', 'rating', 'prep_time'].map do |n|
      @view.ask_for("#{n}?")
    end
    @cookbook.add_recipe(Recipe.new(input[0], input[1], input[2], input[3]))
  end

  def destoy
    index = @view.ask_for('recipe index?').to_i
    @cookbook.remove_recipe(index)
  end

  def import
    ingredient = @view.ask_for('Recipe to import?')
    recipe_parse = RecipeParse.new(ingredient)
    recipe_parse.call
    recipe = recipe_parse.titles
    description = recipe_parse.descriptions
    rating = recipe_parse.ratings
    prep_time = recipe_parse.prep_time
    pick = @view.ask_for('which one you like to import?').to_i - 1
    @cookbook.add_recipe(Recipe.new(recipe[pick], description[pick], rating[pick], prep_time[pick]))
    @view.display_list(@cookbook.all)
  end

end
