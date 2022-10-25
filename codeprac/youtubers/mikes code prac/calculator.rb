num1 = gets.chomp.to_i
operator = gets.chomp
num2 = gets.chomp.to_i

puts num1.method(operator).call(num2)
