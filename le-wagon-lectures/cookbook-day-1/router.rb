class Router
  def initialize(controller)
    @controller = controller
  end

  def run
    loop do
      puts 'What would you like to do'
      puts '1 - Add a task'
      puts '2 - List all tasks'
      puts '3 - Mark as complete'
      puts '4 - Exit'
      print '> '
      choice = gets.chomp.to_i

      case choice
      when 1 then @controller.add_task
      when 2 then @controller.list_tasks
      when 3 then @controller.mark_task_as_complete
      when 4 then break
      else puts 'Wrong input'
      end
    end
  end
end
