puts 'name?'

name = gets.chomp
pattern = /(\w+) (\w+)/
if name.match(pattern)
  match_date = name.match(/?<fname>(\w+) ?<lname>(\w+)/)
  puts "your fname is #{match_date[1]} and last name is #{match_date[2]}"
else
  puts "its not a valid email"
end
