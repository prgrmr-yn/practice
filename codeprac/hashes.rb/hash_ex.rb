string = 'hello world'

frequency = {}
frequency.default = 0
string.delete(' ').each_char do |val|
  frequency[val] += 1
end
puts string
puts frequency
