def main():
    text_list = read_list("provinces.txt")
    #to print the list before any change
    print(text_list)
    #To delete the 1st element
    text_list.pop(0)
    #To delete the last element
    text_list.pop()
    #To replace AB with Alberta
    text_list = list(map(lambda x: x.replace('AB', 'Alberta'), text_list))
    #To count repetition
    count = text_list.count("Alberta")

    print(f"Alberta occurs {count} times in the modified list.")

def read_list(filename):
    text_list = []
    with open(filename, "rt") as text_file:
        for line in text_file:
            clean_line = line.strip()
            text_list.append(clean_line)
    return text_list

if __name__ == "__main__":
    main()