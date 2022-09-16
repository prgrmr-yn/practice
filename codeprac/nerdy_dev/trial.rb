puts 'Hello to ruby programming language'



first = 'alex'

PIE = 3.14
radius = 5
area = PIE * radius * radius


# puts 1_234
# puts -500
# puts 0366.class
# puts 0xff.class
# puts 123.456
# puts 0b1111.class

sentence = 'A quick brown_fox'
sentence << ' jumps over the '
sentence << 'lazy dog'

sentence.gsub!('lazy', 'quick')

words =  sentence.split



words[0..3].join(' ')


greet = 'hello world'.freeze

begin
  greet[0] = ''
rescue FrozenError => e
  "we are really sorry #{e}"
end

# check if the string is frozen?
greet.frozen?


# object_id
'tommy'.freeze.object_id
'tommy'.freeze.object_id

#arrays

superheroes = ['spider', 'super', 'goku']

superheroes.first.class
superheroes.first(2).class
superheroes.last

superheroes.push('lazy dog')
# superheroes.pop(superheroes.length)

# superheroes.unshift 'hello'
# superheroes.shift
# superheroes.insert(0, 'hello')
arr = Array(1..10)

count = arr.count{|num| num>9}

superheroes.each do |superhero|
  superhero
end

superheroes.each_with_index do |superhero, ind|
  [superhero, ind]
end

'Alex is a software developer'.each_char do |char|
  char
end

nums = arr.map do |ar|
  ar +  10
end

odd_num = nums.select do |num|
  num.odd?
end
[1,2,1,2,3,3].uniq
[1,2,1,2,3,3].sample
[1,2,1,2,3,3].take(3)

a= 1,2,3,4,5
b = 1,3,4,5,6,87
# gives common items in an array
a & b

# | operaotor| removes the duplicates but include all values
a | b


# Hash tables
items = {}
items[:pen] = 3
items[:pencil] = 5
items[:pencil]


items.each do |key, value|
  "#{key} - $#{value} "
end

items.each_key do |key|
  "#{key} "
end

items.keys.each do |item|
  item
end
items.key?(:cardboard)
items.key?(:pencil)

given_string = 'thenerdydev'
freq = {}
given_string.each_char do |str|
  if freq.key?(str.to_sym)
    freq[str.to_sym] += 1
  else
    freq[str.to_sym] = 1
  end
end

hash = freq.select do |key, val|
  val == 1
end
hash.keys
hash.fetch(:sdf, 'cant find')
hash.fetch(:sdf){ |k| "cant find key called #{k}"}

# merge hash
user = {
  name: 'alex',
  age: 21,
  profession: 'developer'
}

new_user = user.merge({age:32, country: 'UK'})
new_user


# dig method

person = {
  details: {
    name: 'alex',
    gender: 'male',
    profession: 'developer',
    age: 21
  }
}

person.fetch(:details).fetch(:name)
person.dig(:details, :name)

items.transform_values {|x| x + 10}

require 'set'

nums = Set.new
nums << 1
nums << 2
nums << 3
nums << 2

# ranges
Array('a'..'z')
('a'..'z').to_a

# step method

('a'..'z').step(10).to_a

(1..10).each do |num|
  num
end

rand(1..30)

# CSV (comma seperated values)

require 'csv'

# puts CSV.read('items.csv', headers: true)

require 'json'

obj = '{
  "d" : 344
}'
hash1 = JSON.parse(obj)
hash1

hash1.to_json


# all classed in ruby inherit from object class
# and object class itself inherit from BasicObject class


obj.class

Array.class

class Customer
  @@customer_count = 0
  attr_reader :id, :name, :age, :type, :gender
  def initialize(id, name,age, type, gender)
    @id = id
    @name = name
    @age = age
    @type = type
    @gender = gender
    @@customer_count += 1
  end

  def self.count
    @@customer_count
  end

  def display_details()
    puts "id: #{@id}"
    puts "age: #{@age}"
    puts "type: #{@type}"
    puts "gender: #{@gender}"
  end

  public :display_details

end

customer_one = Customer.new(1, 'alex', 21, 'high-spender', 'male')
customer_two = Customer.new(2, 'james', 29, 'low-spender', 'male')



class A
  def do_something
    "doing somethind"
  end

  def walk_the_dog
    "walking the dog"
  end
end

class B < A
  def do_that
    'Doing that...'
  end

  def sing_song
    'Singing the song'
  end
end


n = B.new
n.sing_song
n.walk_the_dog

# ruby multiline block
[1,2,3].each do |num|
  num
end

def greet
  puts 'inside a'
  yield
  puts 'coming out of a greet'
end

def perforn(name)
  yield(name.upcase)

  yield(name.capitalize)
end

perforn('yatin'){|name| name}


first = -> {'this is a lamadda'}

multiply = -> (num){ num * 2 }
multiply.call(2)

# proc in ruby

result = Proc.new do |a,b|
  puts 'inside a proc'
  sum = a + b
  product = a * b
  puts "The sum of #{a} and #{b} is #{sum}"
  puts "The product of #{a} and #{b} is #{product}"
end


# b = Proc.new{|name| name}
# b.call

b = -> (name){name}

hello = -> { return 'hello' }
hello.call



def hello
  puts 'before execution'
  hello = Proc.new{return 'hello'}
  puts 'after'
end

 def invoke_proc(proc_fn)
  counter = 1
  proc_fn.call
 end

 counter = 0
 proc_fn = Proc.new { counter}

 invoke_proc(proc_fn)


 #  binding class

 def get_binding
  foo = 1
  bar = 3
  binding
 end
get_binding.eval('foo')
get_binding.eval('bar')


str = 'i love javascript'

str =~ /love/
str.include? 'love'

def y(s)
  s =~ /[aeiou]/
end
y('love')
y('nerd')
y('xyz')


def yy(num)
  num =~ /[1-6]/
end

yy('sad4')
yy('fds4hgf')


#wildcards



'7f4'.match(/\d.\d/)





def validate(str)
  !!str.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
end

validate('255.255.1.4')


module Computation
  PI = 3.14
  def self.double(num)
    num * 2
  end
end
Computation::PI
Computation.double(2)

class Calculator
  include Computation
end

Calculator.ancestors


# Enumerable
# inject

[1,3,4,45].inject {|acc, current_num | acc + current_num}

items = {
  pencils: 20,
  pens: 45,
  laptops: 3
}
items.inject(0){|acc, (key, val)| acc + val}
class Product
  def initialize(name,price)
    @name = name
    @price = price
  end
end

obj =  [1,2,3,4].to_enum
# obj.class
musicians = [1,23,45,3]
begin
obj.next
obj.next
obj.next
obj.next

rescue StopIteration => e
  e.class.name
  e.backtrace
  e.message
end

musician = musicians.to_enum
loop do
  musician.next
end

# Exceptions

def buy_cheese
  puts 'cheese bought'
end

def buy_chocolate
  raise 'no chocolate left'
end

def go_shopping
  buy_cheese
  buy_chocolate
end

begin
go_shopping

rescue RuntimeError => e
  puts e.message
end


begin
File.open('df.txt')

rescue Errno::ENOENT => exception
  puts exception.message
end
