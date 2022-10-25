require 'date'

def days_until_bday
  puts 'What you bday date?'
  d = gets.chomp
  puts 'whats your birthday month? '
  m = gets.chomp
  puts 'whats your birthday year? '
  y = gets.chomp
  today = Date.today
  birthday = Date.parse("#{d} #{m} #{today.year}")
  age = ((today - Date.parse("#{d} #{m} #{y}")).to_i)/365
  if today < birthday
    days_left = today - birthday
  else
    days_left = birthday.next_year - today
  end
  format = days_left.to_i.abs

  "you have got #{format} days until you bday, you gonne be #{age} years old, fkn old cunt"
end
puts days_until_bday

# puts
