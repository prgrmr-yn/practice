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
p paris.value? 'nice'
# get all keys as array
paris.keys
# get all values as array
paris.values


time = 35
