class Router
  def initialize(controller)
    @controller = controller
  end

  def run
    def empty_line
      puts ''
    end

    loop do
      puts 'What would you like to do?'
      puts '1 - Add task'
      puts '2 - List all tasks'
      puts '3 - Delete a task'
      puts '4 - Mark task as complete'
      puts '5 - Exit'
      print '> '
      choice = gets.chomp.to_i
      empty_line


      case choice
      when 1 then @controller.add_task
      when 2 then @controller.list_task
      when 3 then @controller.destroy
      when 4 then @controller.mark_task_as_complete
      when 5 then exit
      else puts 'Wrong input'
      end
      empty_line
    end
  end
end
