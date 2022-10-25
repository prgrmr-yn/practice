def greet(fname, lname)
  full_name = "#{fname.capitalize} #{lname.capitalize}"
  yield(full_name)
end
