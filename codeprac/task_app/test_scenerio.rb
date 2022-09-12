require_relative 'task'
require_relative 'repository'
require_relative 'view'
require_relative 'controller'
require_relative 'router'

repository = Repository.new
view = View.new
controller = Controller.new(view, repository)
router = Router.new(controller)

router.run
