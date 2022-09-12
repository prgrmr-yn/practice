is_male = false
is_tall = false

if is_male && is_tall
  puts 'u are tall male'
elsif is_male && !is_tall
  puts 'you are a short male'
elsif !is_male && is_tall
  puts 'you are not male but you are tall'
else
  puts 'you are not male or tall'
end
