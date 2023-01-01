def get_day_name(day)
  case day
  when 'mon' then 'monday'
  when 'tues', 'tue' then 'tuesday'
  when 'wed' then 'wednesday'
  when 'thu', 'thurs' then 'thursday'
  when 'fri' then 'friday'
  when 'sat' then 'saturday'
  when 'sun' then 'sunday'
  else 'Invalid  abbreviation of day'
  end
end

puts get_day_name ARGV[0]
