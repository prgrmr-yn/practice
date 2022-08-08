require 'time'
time = (Time.now.to_s)[11,2].to_i
greeting = ''

if time < 12
  greeting = 'Good morning'
elsif time < 18
  greeting = 'Good evening'
else
  greeting = 'Good night'
end

puts greeting
