class View
  def ask_user(content)
    puts content
    gets.chomp
  end

  def display_tasks(tasks)
    if tasks.empty?
      puts '
------no tasks to display------'
    else
      tasks.each_with_index do |task, ind|
        result = task.completed? ? '√' : 'X'
        puts "#{ind + 1} - [#{result}] - #{task.name}"
      end
    end
  end
end
