require_relative 'task'
class Controller
  def initialize(view, repository)
    @view = view
    @repository = repository
  end

  def add_task
    title = @view.ask_user_for_title
    task = Task.new(title)
    @repository.add(task)
    # Git task to repo
  end

  def list_task
    tasks = @repository.all
    @view.list_tasks(tasks)
  end

  def mark_task_as_complete
    list_task
    index = @view.ask_user_for_task_index('complete')
    task = @repository.find(index)
    task.mark_as_completed!
    # marks as complete in instance
  end

  def destroy
    list_task
    index = @view.ask_user_for_task_index('delete')
    @repository.remove(index)

  end
end
