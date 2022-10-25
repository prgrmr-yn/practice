require 'csv'

# TODO - let's read/write data from beatles.csv
filepath = 'data/beatles.csv'
file = 'data/beatle.csv'

# CSV.parse(out_string)
p CSV::DEFAULT_OPTIONS.fetch(:col_sep)

col_sep = '::'
inn = CSV.generate(col_sep: col_sep) do |csv|
  CSV.foreach(filepath) do |row|
    csv << row
  end
end

onn = ''

CSV.filter(inn, onn) do |row|
  row[1] = row[1]
end
data = CSV.parse(onn)

CSV.open(file, 'w') do |csv|
  data.each do |dat|
    csv << dat
  end
end
