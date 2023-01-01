puts  'please tell me the email'

email= 'yy@gaming.com'
if email.match /\w+\@\w+\.\w{2,}/
  'its an email'
else
  'not an valid email'
end

name_pattern = /(?<first_name>\w+) (?<last_name>\w+)/i

'What is your name'
name = 'anna ferrer'

if name.match(name_pattern)
  match_data = name.match(name_pattern)
  "your first name is #{match_data[:first_name]} and your last name is #{match_data[:last_name]}"
end

# gsub

'wassup boys'.gsub(
  /^(\w+) (\w+)$/, 'Hey \2, \1'
)

p 'my hobby is a programmer'.gsub(
   /(\w+) (\w+) (\w+) (\w+) (\w+)/, 'Hey \2 \1 \3 \4\5'
)
