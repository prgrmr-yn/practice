class Task
  attr_reader :title
  def initialize(title)
    @title = title
    @completed = false
  end

  def mark_as_complete
    @completed = true
  end

  def completed?
    @completed
  end
end
