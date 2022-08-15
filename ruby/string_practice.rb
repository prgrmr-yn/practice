str = 'abcdeU'

# each_char
str.each_char do |char|
  char if ['a','e','i','o','u'].include? char.downcase
end

# each_char_with_index
str.each_char.with_index do |char, ind|
  "#{ind}-#{char}"  if %w(a e i o u).include?(char.downcase)
end

# each_char.with_index(custom starting index)
str.each_char.with_index(10) do |char, ind|
  "#{ind} #{char}"
end

# each_byte
str1 = 'abABCDभारत'
str1.each_byte do |byte|
  byte
end

p 'abc aBcA'.count('a-c', 'b')
