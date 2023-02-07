require 'dotenv'
require 'net/http'
 
Dotenv.load


def upload_results(data, scheme)
  description = ''
  data.each do |d|
    description += "```#{d.store.gsub(/ /, '_')}------#{d.fuel_price}------Updated #{d.time_interval}```\n"
  end

  uri = URI.parse(ENV['DISCORD'])
  request = Net::HTTP::Post.new(uri)
  request.content_type = "application/json"
  request.body = {
    "content": nil,
    "embeds": [
      {
        "title": "TOP 10 STORES OF THE DAY FOR #{scheme.upcase}",
        "description": description.chop,
        "color": 4877738
      }
    ],
    "attachments": []
  }.to_json
  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") do |http|
    http.request(request)
  end

  puts response.body
end
