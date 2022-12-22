students = ['Peter', 'Mary', 'George', 'Emma']

# Hashes
paris = {
  "country" => "france",
   "monument" =>"eiffel tower",
   "population" => 10
}

# CRUD
# Read
paris['country']

#  Create
paris['people'] = 'nice'

# Update
paris['population'] = 3_290_340

# Delete
paris.delete('population')

paris.each do |key,  value|
  "#{key} => #{value}"
end

# check if key is present
paris.key? 'people'
# check if value is present
paris.value? 'nice'
# get all keys as array
paris.keys
# get all values as array
paris.values

cities = {
  london: {
    country: 'england',
    monument: ['big ben', 'london bridge'],
    self: 'london'
  },
  paris: {
    country: 'france',
    monument: ['eiffel tower', 'panthéon'],
    self: 'paris'
  }
}
cities[:london][:monument] # returns an array
cities[:paris][:monument] # returns an array


# Excercise HTML GENERATOR
# tag('h1', 'Hello world')

def tag(name, content, attr = {})
  tag_list = attr.map { |key, val| " #{key}='#{val}'" }.join
  p "<#{name}#{tag_list}>#{content}</#{name}>"
end

tag('h1', 'hello world', class: 'blue', href: 'www.google.com', id: 'html-gen')
