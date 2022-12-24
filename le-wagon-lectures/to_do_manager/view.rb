class View
  def ask_user_for_title
    puts 'Adding a task.....'
    puts 'What would you like to add?'
    print '> '
    gets.chomp
  end

  def list_tasks(tasks)
    puts "Listing all tasks..."
    tasks.each_with_index do |task, index|
      completed = task.completed? ? '✅' : '❌'
      puts "#{index + 1} - #{completed} #{task.title}"
    end
  end

  def ask_user_for_task_index(question)
    puts question == 'delete' ? 'which task would you like to delete? ' : 'What task would you like to complete? '
    print '> '
    gets.chomp.to_i - 1
  end
end
