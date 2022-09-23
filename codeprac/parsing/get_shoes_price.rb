require 'open-uri'
require 'nokogiri'
require 'date'
require 'net/http'

date = DateTime.now.strftime('%l:%M%P')

url = 'https://www.jd-sports.com.au/product/white-jordan-air-1-mid/15988184_jdsportsau/'

html_file = URI.open(url, 'User-Agent' => 'firefox').read
html_doc = Nokogiri::HTML(html_file)
nike_shoes_price = ''
html_doc.search('.itemPrices .pri').each do |el|
  nike_shoes_price << el.children.text
end


loop do
  puts '------OPTIONS--------'
  puts '1- Get Jordan Air 1 Mid price'
  puts '2- Exit'
  print '> '
  choice = gets.chomp.to_i
  case choice
  when 1
    puts "
----At#{date}, the shoes are priced at #{nike_shoes_price}
    "
  when 2 then exit
  else
    puts 'wrong input'
    puts ''
  end
end
puts nike_shoes_price

uri = URI.parse('https://discord.com/api/webhooks/1021205911844429924/ZIDoxA23G-RCjbzZrmBu6iClWfPuWtw2xDLpp7Q96iBRJ7tuwZ9ARn6tv-mdpS7V7HN7')
header = {'Content-Type': 'application/json'}
content  = 'hi there'
