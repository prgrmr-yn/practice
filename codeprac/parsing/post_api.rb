10.times do

  print`curl -H "Content-Type: application/json" -X POST -d '{"content":"hello"}' https://discord.com/api/webhooks/1021205911844429924/ZIDoxA23G-RCjbzZrmBu6iClWfPuWtw2xDLpp7Q96iBRJ7tuwZ9ARn6tv-mdpS7V7HN7`
end

# require 'uri'
# require 'net/http'
# require 'json'

# uri = URI('https://discord.com/api/webhooks/1021205911844429924/ZIDoxA23G-RCjbzZrmBu6iClWfPuWtw2xDLpp7Q96iBRJ7tuwZ9ARn6tv-mdpS7V7HN7')
# json = { 'content' => 'Hey ther mate' }
# res = Net::HTTP.post_form(uri, json)
# puts res.body  if res.is_a?(Net::HTTPSuccess)


# uri = URI('https://discord.com/api/webhooks/1021205911844429924/ZIDoxA23G-RCjbzZrmBu6iClWfPuWtw2xDLpp7Q96iBRJ7tuwZ9ARn6tv-mdpS7V7HN7')
# json = { 'content' => 'Hey ther mate' }
# res = Net::HTTP.post_form(uri, json)
# puts res.body  if res.is_a?(Net::HTTPSuccess)
