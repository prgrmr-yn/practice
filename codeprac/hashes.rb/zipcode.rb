zip_code = {
  dandenong: 3175,
  eummemoring: 3176,
  carnegie: 3163,
  bayswater: 3163,
  fitzroy: 3065

}
zip_code.default = 'unknown suburb, please try again'

puts 'whats the postcode you wanna know'
key = gets.chomp.gsub(' ', '_').downcase
puts zip_code[key.to_sym]
