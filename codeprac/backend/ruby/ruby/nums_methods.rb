# How many nums class we have?
# 1-Integer
# 2-Float
# 3-Fixnum
# 4-Bignum
# 5-Complex
# 6-Rational
# 7-BigDecimal

# additional operator
4 + 4 # 8 adds nums before and after the operator
9 + 9 + 2 # 20, adds nums before and after the operator (if all same operator, start from the left)

# minus operator
4 - 4 # returns 0
9 - 9 - 2 # -2 returns negative as it went past 0

# morethan operator
4 > 2 # true => returns Boolean if left number is bigger than right num
4 > 29 # false => returns Boolean if right number is bigger than left num

# morethan or equal operator
4 >= 4 # true => returns Boolean if left number is bigger or equal to or than right num
4 >= 29 # false => returns Boolean if right number is bigger or equal to or than left num

# lessthan operator
4 < 2 # false => returns Boolean if left number is smaller than right num
4 < 29 # true => returns Boolean if left number is smaller than right num

# lessthan operator
4 < 2 # false => returns Boolean if right number is smaller or equal to or than left num
4 <= 4 # true => returns Boolean if right number is smaller or equal to or than left num

# <=> operator
4 <=> 2 # returns 1 if left is true
4 <=> 4 # returns 0
2 <=> 4 # returns -1

# == operator
4 == 4 # returns Boolean if left num is equal is to right num



# Integar.sqrt
Integer.sqrt(25) # returns 5 as 5*5 is 25
Integer.sqrt(26) # return 5 as it checks the number before 26 if 26 is not a square root of anything

# Exponential
bit_max_val = 2**32 #4294967296, 32-bit max value
positive_max_val = bit_max_val / 2 - 1 # 2147483647, half of the binary val assigned is positive, to be specific (2n-1) which in this case is (2**32/2)-1
negative_max_val = bit_max_val / 2 # 2147483648, half of the binary has been given to negative numbers

# abs
4.abs # returns positive value 4 of the number after checking if its positive or negative
-4.abs # returns positive value 4 of the number after checking if its positive or negative

#Integer.ceil
18.ceil # 18 (default value in param is 0)
18.ceil(1) # 18 (returns self if ndigit(in params) is zero or positive)
18.ceil(-1) # 20(positive value), ceil the number by its 10s place if num that we ceil is positive and param is negative
-18.ceil(-1) # -10(negative value),floor the num by its -10s place if num that we ceil is negative and param is negative

#Integar.floor(waiting!!)
18.floor # 18 (default value in param is 0)
18.floor(1) # 18 (returns self if ndigit(in params) is zero or positive)
18.floor(-1) # 10(positive value), floor the number by its -10s place if num that we floor is positive and param is negative
-18.floor(-1) # -20(negative value),floor the num by its 10s place if num that we floor is negative and param is negative

# Integar.chr
65.chr # "A", returns a string of the character assigned

# Integer.digits
h = 234
h.digits # returns an array of [4, 3, 2], doesn't modify original variable

#Integer.downto(number)
num= 10
#num.downto(1){|n| print "#{n}.. "}
#puts 'lift off wooo hoo!'

# Integer.upto(number)
num = 1
print 'Count with me '
num.upto(10){|n| print  '..', n} # (..1..2..3..4..5..6..7..8..9..10)
num.upto(5){|n| print '--', n} # (--1--2--3--4--5)

# Integer.even?
4.even? # (true), returns Boolean value if number is even or not
3.even? # (false), returns Boolean value if number is even or not

# Integer.odd?
3.odd? # (true), returns Boolean value if number is odd or not
4.odd? # (false), returns Boolean value if number is odd or not

# Integer.next or Integer.succ
10.next # (11), return next bigger number of whats the method being called on
-3240.next # (3239), return next biggest number number of whats the method being called on, in negative -3240 comes before -3239(<negative-2,negative-1>==>(0)==><positive 1,positive 2>)

# Integer.pow(number)
5.pow(3) # (125), returns 5 * 5 * 5
7.pow(5) # (16807), returns 7 * 7 * 7 * 7 * 7

# Integer.remainder(number)
50.remainder(12) # (2), returns 50%12 == 2 || 12*4=48, 50-48 = 2
-50.remainder(12) # (-2), returns -50%12 == -2 || 12*4=48, 48-50 = -2

# Integer.size==> binary knoledge is important
3.size # (8), returns the number of bytes in machine representation which is 64 bit (64-bit = 8 bytes)
val_65_bit = 2 ** 64
max_val_64 = val_65_bit - 1
val_65_bit.size # (9), went over 8 bytes max value so used the 9th byte(default 8 bytes)
max_val_64.size # (8), was exactly under 8 bytes so all good

# Integer.times
#-4.times{|s| puts "helllo #{s}"} # (helllo 1\nhelllo 2\nhelllo 3)
