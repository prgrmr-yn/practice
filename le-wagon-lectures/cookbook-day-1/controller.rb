require_relative 'task'

class Controller
  def initialize(view, repository)
    @view = view
    @repository = repository
  end

  def add_task
    title = @view.get_title
    task = Task.new(title)
    @repository.add(task)
  end

  def list_tasks
    tasks = @repository.all
    @view.display_tasks(tasks)
  end

  def mark_task_as_complete
    index = @view.ask_for_task_index
    task = @repository.find(index)
    task.mark_as_complete
  end
end
