arr = Array.new() #=> []

arr = Array.new(3) # => [nil, nil, nil]

arr = Array.new(3, true) # => [true, true, true]

arr = Array.new(3){Hash.new} # => [{}, {}, {}]


arr = Array.new(4){rand(2..30)} #[Integer, Integer, Integer, Integer]

arr = Array.new(3){|i| i.to_s} # => ["0", "1", "2"]

arr = Array.new(3){Array.new(3, 1)} # => [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

arr = Array.new(3){Array.new(3,rand(2..5))} # => [[3, 3, 3], [4, 4, 4], [3, 3, 3]]
#run once every inner array


arr = Array.new(3){Array.new(3){rand(1..10)}} # =>[[1, 7, 5], [9, 10, 1], [3, 2, 9]]
# run every single iteration

arr = Array({'a' =>  'b', 'c' => 'd'})





arr = Array.new(20){|i| i+1} #=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
arr[3,3] # => [4, 5, 6]
arr[3...6] # => [4, 5, 6]
arr[3...-14]# => [4, 5, 6]
arr.at(0) # => 1
arr.first # => 1
arr.last #=> 20
arr.fetch(200, 'oops, could not find the value') # => "oops, could not find the value
arr.empty? # true here , returns boolean value

arr.include? (3) # => true
arr.include? (300) # => false

arr << 3 # add 3 at the end
arr.pop # remove 3 at the end

arr.unshift(0) # add 0 at the start
arr.shift # remove 0 at the end

arr.insert(3, 'apple') # add apple at the 3rd index
arr.delete_at(3) # removes from the 3rd index

arr.delete(3) # removes the value that matches the argument
arr.insert(2, 3) # removes from the 3rd index

arr.push(nil, nil,2)
arr.delete_at(-1)
arr.compact!

words = %w(first second third fourth fifth)
str = ''
words.reverse_each do |word|
  str += "#{word} "
end

words.map! {|a|'__' + a + '__'}

s = words.select{|word| word.include?('h__')}
r = words.reject{|word| word.include?('h__')}

aarr = Array.new(3){|index| "Element #{index}"}

# arr[(1..).step(3)]
arr[(1...10).step(3)] # 2, 5, 8]


[1,2,3].all?
[2, 29].any?{|x| x > 24}
[2,3,4,4,54,[2,3]].clear

a = ['hello','there', 'mate',['hey', 'ya', 'goin']]
count = arr.count do |ar|
  ar > 14
end


[0,1,2].cycle(2){|e|
  'hel'
}


[2,3,39].delete(30){|obj| "#{obj} not found"}

# arr.delete_if do |el|
#   el > 11
# end
hash = {}
ar = Array.new()
40.times do
arr = Array.new(20){rand(1..20)}
  ar << arr.uniq
end

ar.each do |a|
  a.each do |aa|
    if hash.key?(aa)
      hash[aa] +=1
    else
     hash[aa] = 1
    end
  end
end

[0,1,2].difference([1])
[0,1,2] & [1]



# arr.fill(5..6){|i| fail 'no way' if arr.length > i} # start 1









p arr
