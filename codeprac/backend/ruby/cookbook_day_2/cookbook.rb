require 'csv'
require_relative 'recipe'

class Cookbook

  def initialize(csv_file_path)
    @csv = csv_file_path
    @recipes = []
    load_csv
  end

  def all
    @recipes
  end

  def add_recipe(recipe)
    @recipes << recipe
    update_csv
  end

  def remove_recipe(recipe_index)
    @recipes.delete_at(recipe_index-1)
    update_csv
  end

  def mark_recipe_done(recipe_index)
    @recipes[recipe_index].mark_done!
    update_csv
  end

  private

  def update_csv
    CSV.open(@csv, 'wb') do |csv|
      @recipes.each do |recipe|
        csv << [recipe.name, recipe.description, recipe.rating, recipe.prep_time, recipe.done?]
      end
    end
  end

  def load_csv
    CSV.foreach(@csv)do |csv|
      @recipes << Recipe.new(csv[0], csv[1], csv[2], csv[3], csv[4] == 'true')
    end
  end
end
