# lets code a custom timer method
def timer
  start_time =  Time.now
 yield
  puts"seconds:  #{start_time - Time.now}"
end

timer do
  puts 'starting'
  sleep(2)
  puts 'done'
end


timer do
  puts 'starting'
  sleep(3)
  puts 'done'
end


timer do
  puts 'Doing a lot of work'
  sleep(4)
  puts 'done'
end
