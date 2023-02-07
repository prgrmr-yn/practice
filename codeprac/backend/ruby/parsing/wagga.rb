require 'open-uri'
require 'nokogiri'
require 'net/http'
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

DISCORD = {
  'ulp91' => 'https://discord.com/api/webhooks/1059938549333512282/yRlkat9ayAbTyuiZ_FIyVUDcjssGL-dKw0vndAPuzi1sbQZzhoMe8g1G1oE0R-NthiZ-',
  'ulp95' => 'https://discord.com/api/webhooks/1059941924380872807/gq8ksqzqn8quvkNqXuu0jAVMiW03XuvLzRyxmc3-ryUmlR6bQ4l3ywCx90P5YByy5DGB',
  'ulp98' => 'https://discord.com/api/webhooks/1059942118925287534/3EdjEum-yugggFUh4rkovR14vANoV6Zx5SP3RPfxuun03iP135dPomqr0mPH4y42H6FL',
  'diesel' => 'https://discord.com/api/webhooks/1059942245056401488/QPOrUkrGFPi4lVRaOrcPfeNfU1EM2WPnWdLIw87H_kzVveT0Ij4A8fNTK_OpxuMQOUO6',
  'personal' => 'https://discord.com/api/webhooks/1059946158954401912/ABCdJvofR6jY7NdoTv0yrdTl6qWzg_e53CtezDXlKYzQ66of3WeM1PNxdH-2hVpj7QYX',
  'wagga' => 'https://discord.com/api/webhooks/1060024476177289286/vt_C8EkDEEsc_cAlYvQTYTgzyxx-iRIWm5eJgx7Y6daDiOWcJNZeHujT4dTYDcVBOW82',
  'google' => 'AIzaSyCa74RwCFJzvE676QyRmiEDE4oO_IaexVI'
}

  url = "https://fuelprice.io/nsw/wagga-wagga/?fuel_type=ulp98"

  html_file = URI.open(url).read
  html_doc = Nokogiri::HTML(html_file)

  def make_request(query)
    # Set up the URL and header
    url = URI("https://maps.googleapis.com/maps/api/geocode/json\?address\=#{query}\&key\=#{DISCORD['google']}")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    request = Net::HTTP::Get.new(url)
    response = http.request(request)

    json = JSON.parse(response.body)
    json['results'][0]['geometry']['location']
  end

  def extract_data_from_matched_string(data)
    SevenEl.new(data[1].gsub(/~ /, ''), data[2], data[3])
  end

  def posted(scheme, price)
    uri = URI.parse(DISCORD['personal'])
    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/json"
    request.body = {
      "content": nil,
      "embeds": [
        {
          "title": "Hi Yatin, #{scheme.upcase} is posted in the group",
          "description": "Cheapest price: #{price}",
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

  def upload_results(data)
    description = ''
    data.each do |d|
      store = d.store.gsub(/ /, '_')
      description += "```#{store}------#{d.fuel_price}------Updated #{d.time_interval}```\n"
    end

    uri = URI.parse(DISCORD[''])
    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/json"
    request.body = {
      "content": nil,
      "embeds": [
        {
          "title": "TOP 10 STORES OF THE DAY FOR ulp98",
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
    # posted(scheme, data.first.fuel_price)
    puts "Its posted "
  end

  fuel_info = []
  html_doc.search('.all-stations').each do |element|
    fuel_info << element.content.scan(/7-Eleven.{10,50}\bago/)
  end

  fuel_info.flatten!
  fuel_info.each do |info|
    if info.match(/(7-Eleven.{2,22})(\d{3}.\d{1,2}).?(\d{1,2} (mins|hour|hours) ago)/)
      extract = info.match(/(7-Eleven.{2,22})(\d{3}.\d{1,2}).?(\d{1,2} (mins|hour|hours) ago)/)
      extract_data_from_matched_string(extract)
    end
  end

  first_10_sorted_fuel = SevenEl.all.sort_by { |price| price.fuel_price }
  SevenEl.destroy_all
  upload_results(first_10_sorted_fuel)
