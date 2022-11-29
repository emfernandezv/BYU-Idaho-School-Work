def main():
    # Create and print a list named fruit.
    fruit_list = ["pear", "banana", "apple", "mango"]
    print(f"Original: {fruit_list}")
    reversed_fruit_list = reverse(fruit_list)
    print(f"Reversed List: {reversed_fruit_list}")
    append_fruit_list = append_item(reversed_fruit_list,"orange")
    print(f"Append Orange: {append_fruit_list}")
    insert_fruit_list = insert_item(append_fruit_list,"apple","cherry")
    print(f"Insert Cherry: {insert_fruit_list}")
    remove_fruit_list = remove_item(insert_fruit_list,"banana")
    print(f"Remove Banana: {remove_fruit_list}")
    pop_name = last_item(remove_fruit_list)
    pop_fruit_list = remove_item(remove_fruit_list,pop_name)
    print(f"Pop {pop_name}: {pop_fruit_list}")
    sorted_fruit_list = sorted_list(pop_fruit_list)
    print(f"Sorted: {sorted_fruit_list}")   
    cleared_fruit_list = clear_list(sorted_fruit_list) 
    print(f"Cleared: {cleared_fruit_list}")   





def reverse(list):
    #Using Slicing Operator
    return list[::-1]

def append_item(list,value):
    new_list = list
    new_list.append(value)
    return new_list

def insert_item(list,value_find,value):
    new_list = list
    index = new_list.index(value_find)
    new_list.insert(index,value)
    return new_list

def remove_item(list,value):
    new_list = list
    new_list.remove(value)
    return new_list

def last_item(list):
    ind = len(list) - 1
    return list[ind]\

def sorted_list(list):
    new_list = list
    new_list.sort()
    return new_list

def clear_list(list):
    new_list = list
    new_list.clear()
    return new_list

main()
