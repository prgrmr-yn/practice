puts 'Pick a number? '
number = gets.chomp.to_i

result = number.even? ? 'even' : 'odd'
puts "Number is #{result}"
