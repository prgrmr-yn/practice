text_file =  File.join(__dir__, 'text.txt')

File.open('text.txt', 'r') do |f|
  for line in f.readlines do
    puts line if line.include? 'michael'
  end
end
