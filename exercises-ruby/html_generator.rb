def tag(name, content, attr = {})
  tags_arr = attr.map{ |key, value| " #{key} = '#{value}'"}.join
  "<#{name}#{tags_arr}>#{content}</#{name}>"
end


puts tag('h1', 'le wagon', id: 'unique')
