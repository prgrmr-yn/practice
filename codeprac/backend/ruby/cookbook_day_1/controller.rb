require_relative 'task'

class Controller
  def initialize(view, repository)
    @view = view
    @repository = repository
  end

  def add_task
    input = @view.ask_user('task?')
    task = Task.new(input)
    @repository.add(task)
  end

  def list_tasks
    tasks = @repository.all
    @view.display_tasks(tasks)
  end

  def mark_completed
    input = @view.ask_user('what index of the task?').to_i
    task = @repository.find(input)
    task.mark_as_complete!
  end

  def destroy_task
    ind = @view.ask_user('what index you wanna delete').to_i
    @repository.destroy(ind)

  end
end
