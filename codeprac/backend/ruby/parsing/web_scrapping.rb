require 'open-uri'
require 'nokogiri'

url = 'https://macromike.com.au'

html_file = URI.open(url).read
html_doc = Nokogiri::HTML(html_file)
choice = 0

puts 'please choose your options'
while choice != 3
  puts '1- show specials on macromike'
  puts '2- exit'
  choice = gets.chomp.to_i
  case choice
  when 1
    val = []
    html_doc.search('div').each do |el|
      el.search('.product-grid-item__title').each do |link|
        val << link.content
      end
    end
    val.uniq!
    price = html_doc.search('.product-grid-item__price').map do |element|
      element.content.strip.match(/^\$\d+\.\d{2}/)[0]
    end

    puts "Hi today specials are-"
    puts ''
    val.each_with_index do |value, index|
      puts "#{index+1}- #{value} for #{price[index]}"
    end
    puts ''
    puts 'Let our friendly hot team know if you wanna know more information ;)'
  when 2 then exit
  else puts 'wrong input'
  end
end
