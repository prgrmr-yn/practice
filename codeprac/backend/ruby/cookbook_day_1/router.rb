class Router
  def initialize(controller)
    @controller = controller
  end

  def run
    loop do
      puts 'Choose options '
      puts '1 - list all tasks'
      puts '2 - add a task'
      puts '3 - mark as complete'
      puts '4 - delete a task'
      puts '5 - exit'
      choice = gets.chomp.to_i
      case choice
      when 1 then @controller.list_tasks
      when 2 then @controller.add_task
      when 3 then @controller.mark_completed
      when 4 then @controller.destroy_task
      when 5 then exit
      else puts 'Please choose between 1 to 5'
      end
    end
    end
end
