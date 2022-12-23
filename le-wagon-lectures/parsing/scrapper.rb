require 'open-uri'
require 'nokogiri'

puts 'Please enter an ingredient'
ingredient = gets.chomp
url = "https://www.bbcgoodfood.com/search?q=#{ingredient}"

html_file = URI.open(url).read
html_file

html_doc = Nokogiri::HTML(html_file)
search = html_doc.search(".standard-card-new__article-title")

search.each do |s|
  p s.text.strip
  p s.attribute('href').value
end
