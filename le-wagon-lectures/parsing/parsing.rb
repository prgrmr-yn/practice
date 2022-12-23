require 'open-uri'
require 'json'
require 'nokogiri'
require 'csv'

# Parsing - Opening the file
# Storing - Saving the file

# They can come in CSV, XML & JSON
# Comma Seperated value # Deliminators are important

filepath = 'beatless.csv'

# CSV.foreach(filepath, headers: :first_row) do |row|
#   "#{row['First Name']} #{row['Last Name']} play #{row['Instrument']}"
# end

CSV.open(filepath, 'wb') do |csv|
  csv << ['first_name', 'last_name', 'instrument']
  csv << ['john', 'lenon', 'guitar']
end

json_file = 'file.json'

beatles_serialized = File.read(json_file)
beatles = JSON.parse(beatles_serialized)

# 3.times do |index|
#   File.open("filee#{index}.json", 'wb') do |file|
#     file << beatles_serialized
#   end
# end

xml_file = File.open('beatles.xml')


# Need json and open-uri to get api response
url = 'https://api.github.com/users/prgrmr-yn'
user_serialized = URI.open(url).read
user = JSON.parse(user_serialized)
p user['avatar_url']
