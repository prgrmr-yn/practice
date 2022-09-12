class View
  def ask_user_for_title
    puts 'what do you want to do '
    gets.chomp
  end

  def list_tasks(tasks)
    tasks.each_with_index do |task, ind|
      x = task.completed? ? "X" : "---"
      puts "#{ind + 1 } - [#{x}] #{task.title}"
    end

  end

  def ask_user_for_index
    puts 'whats the index?'
    gets.chomp.to_i - 1
  end
end
