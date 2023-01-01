# 'tells the greeting after checking the local time'

require 'time'
time = (Time.now.to_s)[11, 2].to_i
greeting = ''

if time < 12
  'Good morning'
elsif time < 18
  'Good evening'
else
  'Good night'
end

puts greeting
