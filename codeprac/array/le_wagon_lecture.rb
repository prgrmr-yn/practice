musicians = ['David Gilmour', 'Roger Waters', 'Richard Wright', 'Nick Mason']

# accessing the length
musicians.length

# create
musicians << 'Stevie Wonders'


# read
musicians[1]

# update
musicians[4] = 'Stevie Nicks'

# delete
# musicians.delete('Stevie Nicks')
musicians.delete_at(-1)

# for loop
for musician in musicians do
  musician
end

# for loop not dynamic
for i in 0...(musicians.length)
  musicians[i]
end

# each loop
musicians.each do |musician|
  "Gday #{musician}"
end

#each_with_index loop
musicians.each_with_index do |musician, ind|
  "#{ind+1}- #{musician}"
end

# map loop array
mapped = musicians.map {|musician| musician.upcase}.each_with_index{|m,i| "#{i+1}-#{m}"}

# count
strt = 'R'
counted = musicians.count do |musician|
  musician.start_with?(strt)
end

"In musicians there are #{counted} names that start with letter #{strt}"

# count method with extra hassle
counter = 0
musicians.each do |musician|
  if musician.start_with?('D')
    counter += 1
  end
end

# select method
selected_array = musicians.select do |musician|
  musician.start_with? strt
end

"In musicians there are #{counter} musicians called #{selected_array[0]}"
