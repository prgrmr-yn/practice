def tag(tag_name, tag_content, attributes = {})

  tags_list = attributes.map{ |key, val| " #{key}=\'#{val}'" }.join(' ')
  puts "<#{tag_name}#{tags_list}>#{tag_content}</#{tag_name}>"
end

tag('h1','Hello world', key: 'val', class: 'value', id: 'button')
