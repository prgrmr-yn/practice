require 'rspec'
str = [
  "Milk is $2",
  "Yogurt is $4",
  'catfood is $20',
  'kitty litter is $6',
  'meusli is $3',
  'peanut butter is $9',
  'cacao powder is $10'
]

def string_parser(string)
  string.map do |str|
    str.match(/\d+/)[0].to_i
  end
end
string_parser(str)

describe 'String Parser' do
  it 'can take  a string and output the correct values' do
    expect(string_parser(str)).to eq([2, 4, 20, 6, 3, 9, 10])
  end
end
