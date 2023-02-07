require 'open-uri'
require 'nokogiri'
require 'uri'
require 'json'

class SevenEl
  @@all = []
  attr_reader :fuel_price, :store, :time_interval
  def initialize(s, p, t)
    @store = s
    @fuel_price = p
    @time_interval = t
    @@all << self
  end

  def self.all
    @@all
  end

  def self.destroy_all
    @@all = []
  end
end

url = "https://fuelprice.io/nsw/wagga-wagga/?fuel_type=ulp98"

html_file = URI.open(url).read
html_doc = Nokogiri::HTML(html_file)

def upload_results(data)
  description = ''
  data.each do |d|
    description += "```#{d.store.gsub(/ /, '_')}------#{d.fuel_price}------Updated #{d.time_interval}```\n"
  end

  uri = URI.parse('https://discord.com/api/webhooks/1060039704105455726/Vah2w-KCXOyj21Wjx1Mg128q303hZ2s47pH2aMs7hEd-tQKZjoyEQZc2uVHssOyXV4kw')
  request = Net::HTTP::Post.new(uri)
  request.content_type = "application/json"
  request.body = {
    "content": nil,
    "embeds": [
      {
        "title": "Ulp98 fuel from low to high",
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

def extract_data_from_matched_string(data)
  SevenEl.new(data[1].gsub(/~ /, ''), data[3], data[4])
end

fuel_info = []
html_doc.search('.all-stations').each do |element|
  p element.content
  fuel_info << element.content.scan(/\w.{10,50}\bago/)
end

fuel_info.flatten!
p fuel_info
fuel_info.each do |info|
 if info.match(/((\w{0,20} *){1,5})(\d{3}\.\d{1,2}).?(\d{1,2} (mins|hour|hours) ago)/)
   extract = info.match(/((\w{0,20} *){1,5})(\d{3}\.\d{1,2}).?(\d{1,2} (mins|hour|hours) ago)/)
   extract_data_from_matched_string(extract)
 end
end

first_10_sorted_fuel = SevenEl.all.sort_by { |price| price.fuel_price }
upload_results(first_10_sorted_fuel)

p SevenEl.all
