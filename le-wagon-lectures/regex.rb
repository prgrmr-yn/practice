puts  'please tell me the email'

email= gets.chomp
if email.match /\w+\@\w+\.\w{2,}/
  puts 'its an email'
else
  puts 'not an valid email'
end
