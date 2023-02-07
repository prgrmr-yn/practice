array = ['string', 1, 1.2, true, false, nil]

#arr.first && array.last
array = ['str', 1, 1.2, true, false, nil]
array.first # ("str"), returns the first element in an array
array.last # (nil), returns the last element in an array

# array[index]
array = ['str', 1, 1.2, true, false, nil]
array[30] # (true), check if the index is valid returns the element, nil otherwise

# array.pop
array = ['str', 1, 1.2, true, false, 'nothing']
array.pop # ("nothing") removes the last value and give us value in return
array # (["str", 1, 1.2, true, false]) removes the last value in the last value and modifies the string

array = ['str', 1, 1.2, true, false, 'nothing']
array.push
