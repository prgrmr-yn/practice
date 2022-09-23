require 'json'
require 'open-uri'
require 'date'


time = DateTime.now.strftime('%l:%M %P')


json_url = 'https://data-asg.goldprice.org/dbXRates/USD'


gold_price = 0
silver_price = 0
URI.open(json_url)do |element|
quote = JSON.parse(element.read)
gold_price += quote['items'][0]['xauPrice']
silver_price += quote['items'][0]['xagPrice']
end

while true
  puts '------------OPTIONS-------------'
  puts '--select from drop down menu--'

  puts '1- get gold price'
  puts '2- get silver price'
  puts '3- exit'
  print '> '
  choice = gets.chomp.to_i
  case choice
  when 1
    puts "
    At#{time}, gold price is #{gold_price}
    "
  when 2
    puts "
---At#{time}, silver price is #{silver_price}---
    "
  when 3 then exit

  else
    'wrong input'
  end
end
