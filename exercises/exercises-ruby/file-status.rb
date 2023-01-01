#user inputs the file mode and it goes to the mode user selected

puts "What would you like to do ? [read, write, exit]"
action = gets.chomp.downcase!

case action
when 'read' then puts 'You are in READ mode'
when 'write' then puts 'You are in WRITE mode'
when 'exit' then puts 'Bye-Bye'
else puts 'Wrong action'
end
