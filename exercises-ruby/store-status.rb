#Checks the time of the day and outputs if store is open or not


require 'time'
time = Time.now.to_s[11,8]
puts "Time is #{time}"
time_hour = time[0,2].to_i
store_open = 8
store_close = 22
hours_diff = store_close - time_hour

if time_hour >= store_open && time_hour <= store_close
  if hours_diff == 1
    puts "Store is open, It will close in #{hours_diff} hour"
  else
    puts "Store is open, It will close in #{hours_diff} hours"
  end

else
  puts "Store is closed, opening hours were #{store_open}AM to #{store_close}PM"
end
