require 'date'

# use this to gets today's date
date = Date.today

# parse date to any date
parsed_date = Date.parse('11 sep 2022')

# fetch date of the month
date = Date.today
date.day

# fetch the day of the week(1-7)
date = Date.today
date.cwday

# fetch the day of the week(0-6)
date = Date.today
date.wday

# fetch the month of the year
date = Date.today
date.month
date.mon


# fetch the week of the year (start from jan)
date = Date.today
date.cweek

# change date to next day
date = Date.today # => 2022-09-12
date.next # => 2022-09-13
date.next_day # => 2022-09-13
date.succ


# change month of the year
date = Date.today # => 2022-09-12
date.next_month # => 2022-10-12

# change month of the year
date = Date.today # => 2022-09-12
date.next_year # => 2023-10-12

# change date to previous day
date = Date.today # => 2022-09-12
date.prev_day # => 2022-09-11


# change month of the year to previous month
date = Date.today # => 2022-09-12
date.prev_month # => 2022-08-12

# change month of the year to previous year
date = Date.today # => 2022-09-12
date.prev_year # => 2021-10-12

# check the number of intervals that happened between two dates
date = Date.today # => 2022-09-12
random_date = Date.parse('20 sep 2022') # => 2022-09-2022
date.step(random_date) #returns the enumerator here
date.step(random_date).select{|d| d.monday?} # returns the object itself
date.step(random_date).select{|d| d.monday?}.size # returns object times which gives interval in Integer


# change it to a string
date = Date.today # => 2022-09-12
date.to_s


# returns Boolean when weekday passed
date = Date.today # => 2022-09-12
p date.sunday? # => false
p date.monday? # => true
p date.tuesday? # => false
p date.wednesday? # => false
p date.thursday? # => false
p date.friday? # => false
p date.saturday? # => false
