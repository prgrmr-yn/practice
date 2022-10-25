# Reading from url

# require 'json'
# require 'open-uri'

# github_username = 'prgrmr-yn'
# api_url = "https://api.github.com/users/#{github_username}"

# URI.open(api_url) do |stream|
#   quote = JSON.parse(stream.read)
#   puts quote['html_url']
# end

# <------------------>
# Reading from local file

# require 'json'
# require 'open-uri'

# file = './github.json'
# github_username = 'prgrmr-yn'

# api_url = "https://api.github.com/users/#{github_username}"

# File.open(file) do |element|
#   quote = JSON.parse(element.read)
#   puts quote['location']
# end

# <------------------>
# writing a file
