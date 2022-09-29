# # create

# paris = {
#   country: 'France',
#   monument: 'Eiffel Tower',
#   population: 10,
#   'key' => 'value'
# }

# # read
# paris[:population]

# # update
# paris[:population] = 10_000
# paris[:monument] = 'Big Ben'


# # delete
# paris.delete('key')

# paris.each do |k,v|
#   paris[k] = "#{v}- #{v}" if v == 'Big Ben'
# end

# key_present = false

# paris.each do |k,v|
#   if k.to_s == 'monument'
#     key_present = true
#   end
# end

# paris.key?(:monument)

cities = {
  London: {
    country: 'England',
    monument: ['London Bridge','Big Ben']
  },
  Paris: {
    country: 'France',
    monument: 'Eiffel Tower'
  }
}

cities[:London][:monument]

a = ['dsf263a','afdsa2435s','afs534fas','a45fsfas']
hello = a.sum('start from here')
p a

p hello
