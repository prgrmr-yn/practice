secret_word = 'giraffe'
guess = ''
guess_count = 0
guess_limit = 3
out_of_guesses = false


while guess != secret_word && !out_of_guesses
  puts 'Enter guess: '
  guess = gets.chomp
  puts ''
  break if guess == secret_word

  guess_count += 1
  out_of_guesses = true if guess_count == guess_limit
end
puts out_of_guesses ? 'You lost' : 'You won'
