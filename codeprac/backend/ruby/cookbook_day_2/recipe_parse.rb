require 'nokogiri'
require 'open-uri'

class RecipeParse
  attr_accessor :titles, :descriptions, :ratings, :prep_time

  def initialize(keyword)
    @keyword = keyword
  end

  def call
    url = "https://www.allrecipes.com/search?q=#{@keyword}"
    doc = Nokogiri::HTML(URI.open(url).read, nil, 'utf-8')
    titles_filtered = doc.search('.card__content').first(20).reject do |d|
      ['How To', 'Recalls'].include? d.attributes['data-tag'].value
    end
    @titles = titles_filtered.map do |x| x.attributes['data-tag'].value end.first(5)
    @descriptions = titles_filtered.map do |x|
      x.children[3].children.first.children.first.text
    end.first(5)
    @ratings = [5, 2, 3, 2, 1]
    @prep_time = 16
  end
end
