class Router
  def initialize(controller)
    @controller = controller
    @running = true
  end

  def run
    puts '---Choose the number---'
    while @running
      puts '1 - display list'
      puts '2 - Add a recipe'
      puts '3 - Delete a recipe'
      puts '4 - Import a recipe'
      puts '5 - exit'
      response = gets.chomp.to_i
      case_action(response)
    end
  end
  def case_action(response)
    case response
    when 1 then @controller.list
    when 2 then @controller.create
    when 3 then @controller.destoy
    when 4 then @controller.import
    when 5 then @running = false
    else puts 'wrong input'
    end
  end
end
