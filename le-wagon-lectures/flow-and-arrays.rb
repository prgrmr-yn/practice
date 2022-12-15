# Using IF conditional
if true
  "i am true"
end

"How old are you: "
age = 12 #gets.chomp.to_i

condition = age >= 18
if condition
  'You can vote'
else
  "Sorry you can't vote"
end

unless age <= 18
  "You can vote"
else
  'cant vote sorry'
end

# Ternary Operator
age == 18 ? "Its your first time to vote, WOOHOO" : nil

# using Array
coin = ['heads', 'tails'].sample
"Heads or Tails? "
choice = 'tails' # gets.chomp
'Coin:' + coin
coin == choice.downcase ? 'You won' : 'You lost'

# Odd even game

'Pick a number'
number = 2 # gets.chomp.to_i

if number % 2 != 0
  "its an odd num"
else
  "its an even num"
end

# Time

def greeting
  print "What time is it (hour)? "
  hour = gets.chomp.to_i
  if hour == 0
    return def hi
      print "Please enter a number"
      greeting
    end
  elsif hour < 12
    return 'good morning'
  elsif hour > 12 && hour < 17
    return 'good afternoon'
  elsif hour > 17 && hour < 24
    return "good night"
  end
end


# Old ui

def old_ui
  print "Which action? [read | write| exit]: "

  if action == 'read'
    return "You are in read mode"
  elsif action == 'write'
    return "You are in write mode"
  elsif action == 'exit'
    return 'Bye-Bye'
  else
    puts "Wrong action, Try again"
    return old_ui
  end
end

def old_ui_case
  print "Which action? [read | write| exit]: "
  action = gets.chomp

  case action
    when 'read' then "Read mode"
    when 'write' then 'Write mode'
    when 'exit' then 'Bye-By'
    else 'try again'
  end
end

def shop_is_open
  print "What time is it (hour)? "
  hour = gets.chomp.to_i
  morning = hour >= 9 && hour < 12
  afternoon = hour >= 14 && hour < 18

  if morning || afternoon
    return "Shop is open!"
  else
    return 'Shop is closed'
  end
end

def guess_number
  num = rand(1..5)
  p num
  print "Please enter a number: "
  choice = gets.chomp.to_i

  # while num != choice
    [3, 2, 1].each do |tries|
      puts "Wrong guess, #{tries} tries left"
      print "Please choose another number: "
      choice = gets.chomp.to_i
      break if choice == num
    # end
  end
  return choice == num ? 'You win' : 'You lost, out of turns'
end

# Array prac
beatles = %w(John Ringo Seb)
# update
beatles[0] = 'john'

# create
beatles << 'george'
beatles.push('georgie')

# add
beatles[beatles.length] = 'greg'

#delete
beatles.delete('greg') # downsize is that all strings maching will delete
beatles.delete_at(-1)
p beatles

