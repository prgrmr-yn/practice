# is_male = false
# is_tall = false

# if is_male && is_tall
#   puts 'u are tall male'
# elsif is_male && !is_tall
#   puts 'you are a short male'
# elsif !is_male && is_tall
#   puts 'you are not male but you are tall'
# else
#   puts 'you are not male or tall'
# end

def timer
  time = Time.now
  yield
  gap = Time.now - time
  puts "took you #{gap} seconds to enter your name?"
end

timer() do
  puts "please enter your name"
  name = gets.chomp
  puts 'hello '  + name
end
