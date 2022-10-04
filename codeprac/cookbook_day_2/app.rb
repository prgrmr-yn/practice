require_relative 'recipe'
require_relative 'cookbook'
require_relative 'controller'
require_relative 'router'

csv_file = File.join(__dir__, 'recipes.csv')


cookbook = Cookbook.new(csv_file)
controller = Controller.new(cookbook)
router = Router.new(controller)

controller.import
