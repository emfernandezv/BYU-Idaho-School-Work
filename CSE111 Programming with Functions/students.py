import csv


def main():
    INUMBER_INDEX = 0
    students_dict = read_dict("students.csv", INUMBER_INDEX)
    print(students_dict)
    search = str(input("Please enter an I-Number (xxxxxxxxx): "))
    print (students_dict.get(search,'No such student.'))


def read_dict(filename, key_column_index):
    """Read the contents of a CSV file into a compound
    dictionary and return the dictionary.

    Parameters
        filename: the name of the CSV file to read.
        key_column_index: the index of the column
            to use as the keys in the dictionary.
    Return: a compound dictionary that contains
        the contents of the CSV file.
    """
    dictionary = {}
    with open(filename, "rt") as csv_file:
        reader = csv.reader(csv_file)
        next(reader)
        for row_list in reader:
            if len(row_list) != 0:
                key = row_list[key_column_index]
                dictionary[key] = row_list[1]
    return dictionary

if __name__ == "__main__":
    main()