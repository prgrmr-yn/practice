# Revision on crud Arrays
musicians = ['David Gilmour', 'Roger Waters', 'Richard Wright', 'Nick Mason']

# Create
musicians << 'Stevie Wonder'

# Read
musicians[0]

# Update
musicians[0] = 'David Jackson'

# Delete
musicians.delete 'David Jackson'# Dangerous
musicians.delete_at 0

musicians


# Revision on Range

inclusive_range = 1..10
exclusive_range = 1..10

exclusive_range.to_a

# Iterators
# Using a for loop

for i in 0...3 do
  musicians[i]
end

for musician in musicians do
  musician
end

# each loops
musicians.each do |musician|
  "Hello #{musician}"
end

musicians.each_with_index do |musician, index|
  "#{index+1}- #{musician}"
end

upcased_musicians = musicians.map do |musician|
  musician.upcase.split.first
end

upcased_musicians # print

r_musicians = musicians.count do |musician|
  musician.start_with? 'R'
end

r_musicians # Print

selected_musicians = musicians.select do |musician|
  musician.include? 'vie'
end

selected_musicians # Print

# Curly block
musicians.each { |musician| musician}

# Custom timer method
def timer
  start_time = Time.now
  yield
  end_time = Time.now
  elapsed_time = end_time - start_time
  elapsed_time
end

timer do
  "Sleeping for 2 seconds"
  #sleep(2)
  "Slept for 2 seconds"
end

timer do
  "Sleeping for 4 seconds"
  # sleep(4)
  "Slept for 4 seconds"
end

def greet(first_name, last_name)
  full_name = "#{first_name.capitalize} #{last_name.capitalize}"
  yield(full_name)
end

hello = greet('john', 'lenon') do |name|
  "Hello #{name}, you good mate?"
end

bonjour = greet('john', 'lenon') do |name|
  "Bonjour #{name}, comment allez-vouz"
end


hello # Print

bonjour # Print

