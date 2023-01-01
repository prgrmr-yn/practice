# # num  = 10 / 0



begin
  # lucky_nums = [4, 8, 15, 16, 23, 42]
  # lucky_nums['dig']
  num = 3/0
rescue TypeError => e
  puts e
  rescue ZeroDivisionError => e
    puts "cannot be #{e}"
end
