require 'rest-client'
require 'json'

url = "https://api.github.com/users/prgrmr-yn/repos"
response = RestClient.get(url)
repos = JSON.parse(response)

repos.each do |repo|
  Restaurant.create(name: repo['name'], rating: rand(1..5), address: repo['name'])
end
