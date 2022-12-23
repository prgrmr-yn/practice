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

  def find(index)
    @tasks[index]
  end

end
