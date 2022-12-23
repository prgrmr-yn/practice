class View
  def get_title
    print 'What would you like to do?  '
    gets.chomp
  end

  def display_tasks(tasks)
    tasks.each_with_index do |task , index|
      completed = task.completed? ? '✅' : '❌'
      puts "#{index + 1}- #{completed} #{task.title}"
    end
  end

  def ask_for_task_index
    print 'What is the index: '
    gets.chomp.to_i - 1
  end

end
