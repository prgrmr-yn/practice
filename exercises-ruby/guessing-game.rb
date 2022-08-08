secret_word = 'javascript'
guess = ''
guess_count = 0
guess_limit = 3
out_of_guesses = false
print 'Whats js short for? (3 tries): '


while guess != secret_word and !out_of_guesses
  if guess_count < guess_limit
    guess = gets.chomp
    if guess != secret_word
      print 'wrong guess, try again: '
    end
    guess_count += 1
  else
    out_of_guesses = true
  end
end
if guess == secret_word
  puts 'you won'
else
  puts 'you lose'
end
