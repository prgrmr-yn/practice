index = 1
arr = []
while index <= 4096
  arr << index
  index += index
end

p arr.length
