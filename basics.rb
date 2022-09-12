print 'Please choose heads or tails: '
chosen_item = gets.chomp
if rand = ['heasd','haeds','hedas'].include?(chosen_item)
  print 'did you mean heads(y/n): '
  maybe = gets.chomp
  maybe = 'y'? chosen_item = 'heads' : chosen_item = 'tails'
end

# rand == chosen_item ? puts 'heads?' : 'too bad'
coin_flip = ['heads', 'tails'].sample
puts "coin flipped on #{coin_flip}, you chose #{chosen_item}"
p coin_flip == chosen_item.downcase ? 'you win' : 'you lose'
