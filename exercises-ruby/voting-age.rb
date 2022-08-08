puts 'How old are you? '
legal_age = gets.chomp.to_i
result = nil
if legal_age >= 18
  result = 'You can vote'
else
  result = "Sorry you cant vote today. Come back in #{18 - legal_age} years"
end
puts result
