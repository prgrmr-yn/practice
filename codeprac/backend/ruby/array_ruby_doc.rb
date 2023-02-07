# Blank array with or without values
arr = Array.new(3, 'hello') #['hello', 'hello', 'hello']

#hash = Array.new(4){Hash.new}

hash  = Array.new(4){|i| i+100}

#
empty_table = Array.new(2){Array.new(3)}




aerr = %w(a b c d e f)
p aerr.take(3)
p aerr.drop(3)
puts 'hello' if !aerr.empty?
