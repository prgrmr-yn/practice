
# running irb in the start

# use .class to check the type of the value
# string type
'london'.class
'london'.capitalize
'london'.length

# check fr the ruby method from irb
'ri String#methodname'

# concatenating
'ruby ' + 'lecture'
language = 'ruby'
lec = 'lecture'
"I am watching a #{language} #{lec}"

# Integer
4.to_f
11/ 4 # 2
3.odd? #convention to add ? after the boolean method

# Float
3.0.to_i
4.3.ceil
4.3.floor
3.0 + 4
11/ 4.0

# Arrays
arr = ['x-men','london', 'paris']
array = %w(london Paris)
arr.sort

# Range
(1..3400).to_a # inclusive
(1...3400).to_a # exclusive

# Boolean
true # True class
false # False class

# Variables
name = 'Michael'
age = 23
age = age + 1
age +=1
first_name = 'Jess'
last_name = 'Silva Carvalho'
"#{first_name} #{last_name}"

require 'date'

def tomorrow
  tomorrow = Date.today + 1
  tomorrow.strftime('%A, %b %d') # Implicit return
end

"Today date is #{Date.today.strftime('%A, %b %d')} and tomorrow's date is #{tomorrow}"


# Method
def full_name(first_name, last_name)
  "#{first_name.capitalize} #{last_name.capitalize}"
end

p full_name'Jess', 'silva'
