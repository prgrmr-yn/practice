def greeting name
  yield(name.upcase)
end

p greeting('yatin'){|yeeld| "Hi #{yeeld}, how are you"}

def cube num
  return num * num * num
end

p cube(3).class
