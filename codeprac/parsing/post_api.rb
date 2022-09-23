require 'open-uri'
require 'net/http'
require 'json'

uri = URI.parse('https://discord.com/api/webhooks/1021205911844429924/ZIDoxA23G-RCjbzZrmBu6iClWfPuWtw2xDLpp7Q96iBRJ7tuwZ9ARn6tv-mdpS7V7HN7')

header = { 'Content-Type': 'application/json' }

contents = {
  content: 'null',
  embeds: [
    {
      title: 'cloud',
      description: 'buyor sell'
    }
  ]
}
p contents

http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri, header)
request.body = contents.to_json
p request
response = http.request(request)
p response
