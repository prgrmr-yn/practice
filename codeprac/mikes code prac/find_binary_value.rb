def method_name(bits)
  sum = 2
  (bits - 1).times do
    sum += sum
  end
  sum - 1
end
puts method_name(16)
