coin = ['heads','tails'].sample
puts 'Heads or tails? '
choice = gets.chomp

=begin
if choice == coin
  result = 'won'
else
  result = 'lost'
end

puts "You #{result}"
=end

result = choice == coin ? 'won' : 'lost'
puts "You #{result}"
