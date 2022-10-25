class Repository
  def initialize
    @tasks = []
  end

  def add(task)
    @tasks << task
  end

  def all
    @tasks
  end

  def find(task)
    @tasks[task - 1]
  end

  def destroy(ind)
    @tasks.delete_at(ind - 1)
  end
end
