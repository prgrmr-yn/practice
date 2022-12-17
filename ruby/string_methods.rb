## String methods to come look back into

# 'add' => can add any string or a variable
# non-destructive => returns the copy of the string

## Case change
# String.upcase
name = 'yatin'
name.upcase # (non-desructive)=> yatin, (!) modifies if want to => YATIN.
=begin
'Michael'.upcase => "MICHAEL"
'michAEL'.upcase => "MICHAEL"
'dwight'.upcase => "DWIGHT"F
=end

# String.downcase()
name = 'YATIN'
name.downcase # (non-destructive)=> YATIN, (!) modifies if want to => yatin.
=begin
'MICHael'.downcase => "michael"
'micHAel'.downcase => "michael"
'DWIGHT'.downcase => "dwight"
=end

# String.swapcase()
name = 'YatIn'
name.swapcase # (non-destructive)=> YatIn, (!) modifies if want to => yATiN.
=begin
'dwIgHt'.swapcase => "DWiGhT"
'DWIGHT'.swapcase => "dwight"
'dwight'.swapcase => "DWIGHT"
'michAEL'.swapcase => "michael"
=end

# String.capitalize()
name = 'yatin'
name.capitalize # (non-destructive)=> yatin, (!) modifies if want to => Yatin.
=begin
'JiM'.capitalize => "Jim"
'JIM'.capitalize => "Jim"
'michaeL'.capitalize => "Michael"
=end


## Search/replace
# String.start_with?()
name = 'Yatin Nagpal'
name.start_with?('ya') # returns true here as the condition is met, false otherwise.
=begin
'Pam'.start_with?('P') => true
'Pam'.start_with?('p') => false
'michael'.start_with?('mich') => true
=end

# String.end_with?()
name = 'Yatin Nagpal'
name.end_with?('Nagpal') # returns true here as the condition is met, false otherwise.
=begin
1-'Andy is in the sales team'.end_with?('sales team') => true
2-'Jim is also in the sales team '.end_with('sales team') => false
#2-its was false with Jim coz the sentense has space at the end but we can use the strip method to get rid of the space and it will be true
3- 'i work for abc company'.end_with('abc company') => true
=end

# String.include?()
name = 'Yatin Nagpal'
name.include?('in') # returns true here as the condition is met, false otherwise.
=begin
1-'Andy is in the sales team'.include?('sales team') => true
2-'Jim is also in the sales team '.include?('Sales team') => false
#2-It was false in the second one coz it was uppercase, to return true we can use downcase method so all the letters will be compared as lowercase(String.downcase.include?('downcased string'))
3- 'pam is not in sales team'.include?('sales team) => if we wanna know who who is in the sales team or not, we can use if statements
=end

# String.index()
name = 'Yatin Nagpal'
name.index('a') # retuns index of first occurance from the left, in this case(1).
=begin
#complicated index use with sub and ternary operator
dream_team =  'Michael, Jim, Dwight, Pam'
found_val =  dream_team.index('Pam')
updated_val =  found_val == nil ? dream_team : dream_team.sub(', Pam','')
if the value is nil then it returns the dream team and it finds the index then it replaces with the other condition and replace
'hello there i am replaced by world'.index('there')
=end

# String.rindex()
name = 'Yatin Nagpal'
name.rindex('a') # retuns index of first occurance from the right, in this case(10).
=begin
"Michael Scott".rindex('c') => returns 9 as it finds the index value of first occurance in the right
'1'.rindex('1') => 0# no matter if we use rindex or index method it will return 0
=end

# Str1 + Str2  ('hel' + 'lo' => hello)
str1 = 'Hello '
str2 = 'Melbourne'
string = str1 + str2 # add value to variable string but doesnt modify str1 and str2(return Hello Melbourne).
=begin
'hello' + 'there' => "hellothere"
'hello ' + 'there' => "hello there"
'hello' + ' there' => "hello there"
=end

# Str1 << Str2  ('hel' << 'lo' =>hello).
str1 = 'Hello '
str2 = 'Melbourne'
str1 << ' ' << str2 # Modify str1 at the end but str2 stays the same (returns 'Hello Melbourne').
=begin
'hello' << 'there' => "hellothere"
'hello' << ' there' => 'hello there'
'hello ' << 'there' => 'hello there'
=end

# Str1[index] = str2
str1 = 'Hello'
str2 = 'Melbourne'
str1[0] = str2 # returns Melbourneello, str1 is modified at the index specified in the brackets, replaced index character with str2..
str1[0] = str2 + ' H' # returns Melbourne Hello, str1 is modified at the index specified in the brackets but this time we added 'space and H'.
=begin
- greeting = 'hello'
  greeting[0] = 'j'
  greeting => returns "jello"
=end

# Str[start_index,length] = str2
str1 = 'Hello'
str2 = 'Melbourne'
str1[0, str1.length] = str2 # returns Melbourne, str1 is modified at the index and length specified, in this case Hello was replace by Melbourne.
=begin
- greeting = 'hello'
  greeting[0,3] = 'je'
  greeting => "jelo"
=end

# Str.chop()
manager = 'Michael Scott'
manager.chop #(non-desructive)=> Michael Scott, (!) modifies if want to => Michael Scot(chops the last letter).
=begin
'hello'.chop => "hell"
'helll'.chop + 'o' => "hello"
=end

# Str.insert(index,'add').
str1 = 'Hello'
str2 = 'Melbourne'
str1.insert(0, str2) # returns "MelbourneHello" as insert method doesnot replace the index character, it adds the parameter2 there(str2)(modifies the string).
=begin
- greeting = 'hello'
  greeting.insert(greeting.length, ' melbourne') => "hello.melbourne"
=end

# Str.succ()
letters = 'helo'
letters.succ # (non-desructive)=> helo, (!) modifies if want to => help(increments the last letter of the string).
=begin
'a'.succ => "b"
'b'.succ => "c"
'aa'.succ => "ab"
'ba'.succ => "bb"
=end

# Str.reverse()
manager = 'leahciM'
manager.reverse # (non-desructive)=> 'leahciM', (!) modifies if want to => "Michael" (reverse the letters in the string).
=begin
'reverse'.reverse => "esrever"
'esrever'.reverse => "reversè"
=end

#Str.prepend('add')
manager = 'Scott'
manager.prepend('Michael ') # returns "Michael Scott", modifies the string and add parareter('Michael ') at the starting so does the name suggest prepend.
=begin
'melbournians'.prepend('hello ').capitalize => "Hello mellbournians"
'hello'.prepend('melbourne ').upcase => "MELBOURNE HELLO"
=end

# Str * integar
greeting = 'Hello '
greeting * 3 # returns "Hello Hello Hello ", gives a copy of the string (non-destructive).
=begin
'ha '* 3 #=>"ha ha ha "
'ha '.strip * 3 #=>"hahaha"
('ha ' * 3).strip => "ha ha ha"
('ha ' * 3).strip.upcase => "Ha Ha Ha"
=end

# Str[index,length of how many letters we want]
greeting = 'Hello '
greeting[0, 5] # returns "Hello", gives a copy of the string(non-destructive), in this case we asked it to gives use from index 0 to length 5 which removes the space at the end.
=begin
'melbourne'[0, 3] => mel
'melbourne'[0, 3].capitalize => Mel
=end

# Str [index...length],[index..index]
greeting = 'Hello'
greeting[1..3] # returns 'ell' (non-destructive)(inclusive range).
greeting[1...3] # returns 'el' (non-destructive)(exclusive range).
=begin
'helloooo'[2...5] => "llo"
'helloo'[2..5] => "lloo"
=end

# Str.chars()
alphabet = 'abc'
alphabet.chars # returns ["a", "b", "c"] as array, (non-destructive) might use to_a instead as "a b c" will return ["a", " ", "b", " ", "c"] as thers spaces too.
=begin
'hello'.upcase.chars => ["H", "E", "L", "L", "O"]
'hello'.chars.upcase =>error (because in the example above it was returning a string uppercase and applying chars method on a string which was returing an array but when we converts into an Array it doesn't work because upcase only work with String)
=end

#Str.chr()
alphabet = 'abc'
alphabet.chr # returns "a" (non-destructive) , return only one first character in the string.
=begin
'unsigned binary'.chr => 'u'
'signed binary'.chr => 's'
=end

# Str.lines()
two_lines = "this is the first line
this is the second"
two_lines.lines # returns an array of two elements (non-destructive) ["this is the first line","this is the second"].
=begin
p "a
b".lines => ["a\n","b"] array of two elements
=end

# Str.split(p1)
manager = '"Michael Scott'
manager.split # returns an array of two elements (non-destructive) ["Michael", "Scott"], by default it look for space, deletes space and divides from there but we can add our own params like 'l' which returns ["Michae", " Scott"].
=begin
'hello'.split =>["hello"]
'hello world'.split => ["hello", "world"] =>
'hello'.split('') => ["h", "e", "l", "l", "o"]
sentence = 'Jan 1, Jan 2, Jan 3, Jan 4, Jan 5'
sentence.split(',', 2) # returns ["Jan 1", " Jan 2, Jan 3, Jan 4, Jan 5"] as passed the second param for how many we elements we want in an array
=end

# Str.center(length, patstr)
binary = '010'
min_bin_depth = binary.center(8, '0') # adds string padstring to the length we provide, returns "00010000"(non-destructive), cannot be modified only returns a copy
=begin
'i wanna be in the centre'.center(10,'-') => "i wanna be in the centre"
'i wanna be in the centre'.center(30, '-') => "---i wanna be in the centre---"
=end

# Str.ljust(length, padstr)
binary = '011'
min_binary_depth = 8
value = binary.ljust(min_binary_depth, '0') # checks the initial string length and if its length is less that the length mentioned in the params its adds on the right of the string we pass as an arguement(non-destructive and can't be modified)
=begin
'i wanna be on the left'.ljust(10,'-') => "i wanna be on the left"
'i wanna be on the left'.ljust(30,'-') => "i wanna be on the left--------"
=end

# Str.rjust(length,padstr)
binary = '011'
min_binary_depth = 8
value = binary.rjust(min_binary_depth, '0') # checks the initial string length and if its length is less that the length mentioned in the params its adds on the left of the string we pass as an arguement(non-destructive and can't be modified)
=begin
'i wanna be on the right'.rjust(10,'-') => "i wanna be on the right"
'i wanna be on the right'.rjust(30,'-') => "--------i wanna be on the right"
=end

# Str.strip()
manager = ' Michael '
manager.strip # (non-desructive)=> " Michael ", (!) modifies if want to => "Michael". removes the whitespaces from both ends
=begin
'space '.strip => "space"
'space'.strip => "space"(if no whitespace then it ignores)
'space '.strip! => nil(be careful with this one,conditional will help here)
"hello world \n\t\v\r ".strip => returns "hello world" it removes newline, any space , verticaltab, or carriage return

=end

# Str.lstrip()
manager = ' Michael '
manager.lstrip # (non-desructive)=> " Michael ", (!) modifies if want to => "Michael". removes the whitespaces from left
=begin
'manager'.lstrip => "manager"
' manager '.lstrip => "manager "('only removes the spaces on the left)
'manager'.lstrip! => nil(be careful with this one,conditional will help here)
=end

# Str.rstrip()
manager = ' Michael '
manager.rstrip # (non-desructive)=> " Michael ", (!) modifies if want to => "Michael". removes the whitespaces from right
=begin
'manager'.rstrip => "manager"
' manager '.rstrip => " manager"('only removes the spaces on the right)
'manager'.rstrip! => nil(be careful with this one,conditional will help here)
=end

# str comparison
str1 = '1'
str2 = '2'
# str1 <=> str2 # returns -1(integar) if the right string is true
# str2 <=> str1 # returns 1(integar) if the left string is true
# str1 <=> str1 # returns 0(integar) if its equal
#'1'left(1) <=> '-1'right(-1), 0 if equals
=begin
'1' <=> '1' => returns 0
'1' <=> '0' => returns 1
'0' <=> '1' => returns -1
=end

# Str.hash
str = '1'
str.hash # non-destructive, doesn't modify, returns a Hash value of a string not Hash class


# Str.hex
str = '1'
str.hex # returns integar as hexadecimal value (16)

# str.to_c
str = '1'
str.to_c # returns a complex number (1+0i)

# str.to_i
str = '45b'
str.to_i # returns 45 as a number, ignores the character at the back
'45'.to_i # returns 45 as a number,
'a'.to_i # returns 0 as a number as it it checks the first digit and if thats not a number it returns 0
'a45'.to_i # returns 0 as a number, as it checks the first digit and if thats not a number it returns 0

# Str.to_r
str = '34'
str.to_r # returns (34/1) as a Rational class

# Str.to_sym
'like'.to_sym # returns :like as a Symbol class

# Str.gsub(str1, str2)#(regex,str2)
greeting = 'hello'
greeting.gsub('h', 'j') # returns jello as it replace the string on every occurance
# (non-desructive)=> hello, (!) modifies if want to => jello.

# Str.sub(str1, str2)
greeting = 'hello'
greeting.sub('e', 'a') # returns jello as it replace the string on first occurance
# (non-desructive)=> hello, (!) modifies if want to => jello.
=begin
'organization'.gsub('z', 'z' => 's') # takes a hash
'price of the phone is 1000 aud and cheap is 100'.gsub(/\d+/){ |d| "$#{d}"}
=end

# Str.replace(str)
greeting = 'hello'
greeting.replace('hallo') # destructive method returns "hel" (greeting is replaced by arguement, can be a variable)


# Str.scan(regex)
greeting = 'Hello'
greeting.scan(/[a-zA-Z]/) # returns an array of the matched regex chars(non-destructive)

# Str[index]
greeting = 'Hello'
greeting[1] # returns index of the string(copy)(non-destructive)

# Str.ascii_only
greeting = 'Hello'
greeting.ascii_only?()  # return Boolean if all letters are ascii

# str.count(str2)
greeting = 'Hello'
greeting.count('l') # returns integar of numbers of occurance happened in a string

# string.count
'aeiouUfeo'.downcase.count('aeiou') # checks the chars provided in the string and returns the number
'aeiouUfeo'.downcase.count('^aeiou') # checks the chars not provided in the string and returns the number
'^-12#abcdeUUU'.downcase.count('a-z', '^aeiou') # check only in the range provided in the first parameter

# string.chomp
'...hello world ...'.chomp # by default it looks for \n, \r, \r\n and chop it of the back
'...hello world ...'.chomp('.') # if there u is a dot it will remove otherwise ignore


# string.concat
greeting = 'hello'
greeting.concat(' world')
greeting # returns "hello world", modifies the string

# string.slice(index, length after the index)
city = 'melbourne'
city.slice(0, 3)
city.slice(3, 4) # returns a copy of a string, (non-destructive)

# string.empty
em_str = ''
em_str.empty? # true, returns Boolean if the string is empty or not
em_str = 'not empty anymore'
em_str.empty? # true, returns Boolean if the string is empty or not
