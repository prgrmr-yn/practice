require 'pry-byebug'

def capitalize(fname, lname)
  binding.pry
  fname.capitalize!
  binding.pry
  lname.capitalize!
  "#{fname} #{lname}"
end

binding.pry
p capitalize('andre', 'jilles')
