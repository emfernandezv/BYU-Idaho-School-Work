import csv, os, time, random, datetime


#GLOBAL VARIABLES
CREDENTIALS_TABLE =  []
CREDENTIALS_HEADER = ['USERNAME','PASSWORD']
CREDENTIALS_FILE = "project_credentials.csv"
TRANSACTION_TABLE = []
TRANSACTION_HEADER = ['USERNAME','NUMBER','DATE','ORIGIN_AMOUNT','ORIGIN_CURRENCY','FINAL_AMOUNT','FINAL_CURRENCY','EXCHANGE_RATE']
TRANSACTION_FILE = "project_transactions.csv"
#INDEX FOR CREDENTIALS
IND_CRED_USER = 0
IND_CRED_PASS = 1

#INDEX FOR TRANSACTIONS 
IND_TRAN_USERNAME = 0

def main ():
    user = ''
    #POPULATE DATA FROM SOURCE
    populate_list(CREDENTIALS_FILE,CREDENTIALS_TABLE)
    populate_list(TRANSACTION_FILE,TRANSACTION_TABLE)
    user = display_menu_login()
    os.system('cls')
    display_menu(user)

def display_menu_login():
    print(f"Welcome  to the Currency Exchange App")
    print()
    print("Please Log in to use the system.")
    print("Main Menu")
    return login()

def display_menu(username):
    option_list = ['1','2','3','4']
    #to refresh the view
    print(f"Welcome {username} to the Currency Exchange App")
    print("Your data has been loaded succesfully")
    print()
    print("Main Menu")
    print("1. Change Password")
    print("2. Check Previous Transactions")
    print("3. New Transaction")
    print("4. Exit")
    option = str(input("Please select an option from the list above: "))
    while option not in (option_list):
        option = str(input("The option is invalid.\nPlease select an option from the list above: "))

    print('\n')
    if option == '1':
        #change password
        password_change(username)
        time.sleep(3)
        os.system('cls')
        display_menu(username)
        
    elif option == '2':
        # transaction history
        # a select function that return the list filtered by the user name
        opt = print_history(username)
        if opt == '3':
            exit_option()
        elif opt == '2':
            print('\n')
            display_menu(username)
        else:
            os.system('cls')
            display_menu(username)

    elif option == '3':
        # new transaction
        #insert function that will have an inner logic to calculate the exchange according to an rate table and store a new row on the CSV
        opt = new_transaction(username)
        if opt == '3':
            exit_option()
        elif opt == '2':
            print('\n')
            display_menu(username)
        else:
            os.system('cls')
            display_menu(username)

    elif option == '4':
        # Exit
        exit_option()

# CSV HANDLING
def populate_list(filename,list):
    try:
        with open(filename, newline = '') as object:                                                                                          
            reader = csv.reader(object, delimiter=',')
            next(reader)
            for line in reader:
                list.append(line)
    except FileNotFoundError as not_found_err:
        #In case file is not on the location or has different name than expected
        print()
        print(type(not_found_err).__name__, not_found_err, sep=": ")
        print(f"The file {filename} doesn't exist.")
        print(f"Make sure your CSV file is named: {filename} and run again the program")
        exit()
    except PermissionError as perm_err:
        #In case of permission errors
        print()
        print(type(perm_err).__name__, perm_err, sep=": ")
        print(f"You don't have permission to read {filename}.")
        print("Run the program again and enter the name" \
                " of a file that you are allowed to read.")
        exit()
    except Exception as excep:
        # In case something else happens
        print()
        print(type(excep).__name__, excep, sep=": ")

def save_csv_file(filename,data,header):
    with open(filename, 'w', encoding='UTF8', newline='') as object:
        writer = csv.writer(object)
        writer.writerow(header)
        writer.writerows(data)

#MENU FUNCTIONS         
def login():
    #setting variables to blank
    log_user = ''
    log_pass = ''
    rec_pass = ''
    #reading user input
    log_user = str(input('USERNAME: ')).upper()
    log_pass = str(input("PASSWORD: ")).upper()
    #VALIDATING USERNAME
    rec_pass = search_value(CREDENTIALS_TABLE,log_user,IND_CRED_USER,IND_CRED_PASS)
    while rec_pass == '-1' or rec_pass != log_pass:
        print('The user is incorrect. Please try again')
        #reading user input
        log_user = str(input('USERNAME: ')).upper()
        log_pass = str(input("PASSWORD: ")).upper()
        #VALIDATING USERNAME
        rec_pass = search_value(CREDENTIALS_TABLE,log_user,IND_CRED_USER,IND_CRED_PASS)
    return log_user

def password_change(username):
    os.system('cls')
    index = search_index(CREDENTIALS_TABLE,username,IND_CRED_USER)
    print("Welcome to the password update module.")
    new_pass = str(input("Please input your new password: ")).upper()
    CREDENTIALS_TABLE[index][IND_CRED_PASS] = new_pass
    save_csv_file(CREDENTIALS_FILE,CREDENTIALS_TABLE,CREDENTIALS_HEADER)
    print("Your password has been update succesfully")

def print_history(username):
    print(f"History of transactions for user: {username}")
    print()
    for element in (TRANSACTION_TABLE):
        if element[IND_TRAN_USERNAME] == username:
            prettyprint_list(element,'\t')
    print()
    opt = str(input("Do you want to:\n1. Clear and go back to the menu\n2. Go back to the menu \nInput the desired option: "))
    while opt not in ('1','2'):
        opt = str(input("The option is invalid.\nDo you want to:\n1. Clear and go back to the menu\n2. Go back to the menu \nInput the desired option: "))
    
    return opt

def new_transaction(username):
    CURRENCY_LIST_o = ['USD','PEN','EUR']
    CURRENCY_LIST_f = ['USD','PEN','EUR']

    T_1 = username
    T_2 = str(count_row(username) + 1)
    T_3 = str(datetime.date.today())
    T_5 = str(currency_promp(CURRENCY_LIST_o,'Initial'))
    CURRENCY_LIST_f.remove(T_5)
    print()
    T_4 = str(input('How much would you like to exchange?:'))
    while float(T_4) <= 0:
        T_4 = str(input('Please input a valid amount number.\nHow much would you like to exchange?:'))
    print()
    T_7 = str(currency_promp(CURRENCY_LIST_f,'Final'))
    print()
    T_8 = str(exchange_generator(3))
    os.system('cls')   
    print(f'For this transaction your exchange rate will be: {T_8}')
    T_6 =  str(round(exchange_operation(T_5,T_4,T_8),2))
    print(f'You will receive: {T_6} {T_7}')

    opt = str(input('Would you like to review the transaction information before saving?\n1. Yes, Let me Review it\n2. No, Save and take me to the main menu\nOption: '))
    while opt not in ('1','2'):
        opt = str(input('Please select a valid option\nWould you like to review the transaction information before saving?\n1. Yes, Let me Review it\n2. No, Save and take me to the main menu\nOption: '))

    if opt == '1':
        print()
        print(f'Origin Currency: {T_5}\nOrigin Amount: {T_4}\nFinal Currency: {T_7}\nExchange Amount: {T_6}\nExchange Rate: {T_8}\n')
        opc = str(input('Would you like to save the transaction?\n1. Yes, save it.\n2. No, I want to start over\n3. Take me back to the main menu\nOption: '))
        while opt not in ('1','2','3'):
            opt = str(input('Please select a valir option\nWould you like to save the transaction?\n1. Yes, save it.\n2. No, I want to start over\n3. Take me back to the main menu\nOption: '))
        if opc == '1':
            save_transaction(T_1,T_2,T_3,T_4,T_5,T_6,T_7,T_8)
            os.system('cls')
            display_menu(username)
        elif opc == '2':
            os.system('cls')
            new_transaction(username)
        else:
            os.system('cls')
            display_menu(username)
    else:
        save_transaction(T_1,T_2,T_3,T_4,T_5,T_6,T_7,T_8)
        os.system('cls')
        display_menu(username)

def exit_option():
    os.system('cls')
    print("Thanks for using the Currency Exchange app.\nHope to see you back soon!")
    exit()

#OTHER FUNCTIONS
def search_value(list,search,index_col_search,index_col_return):
    for element in list:
        returned_value = element[index_col_search]
        if returned_value == search:
            return element[index_col_return]
    return '-1'

def search_index(list,search,index_col_search):
    x = 0
    for element in list:
        returned_value = element[index_col_search]
        if returned_value == search:
            return x
        x = x + 1
    return '-1'

def prettyprint_list(list,sept):
    print(*list, sep=sept)

def exchange_rate(value_max):
    return round(random.uniform(1.00, value_max), 2)

def exchange_generator(times):
    exc = exchange_rate(9.99)
    print(f'Todays Exchange Rate is: {exc}')
    opt = str(input(f'We can offer you up to {times} exchange rates.\nWould you like to proceed?\n 1. Yes \n 2. Assign New rate (random)\nOption:'))
    while opt not in ('1','2'):
        opt = print('You have selected an invalid option.\nWould you like to proceed?\n 1. Yes \n 2. Assign New rate (random)\nOption:')
    
    while times > 0 and opt == '2':
        times = times - 1
        exc = exchange_rate(9.99)
        print(f'Todays Exchange Rate is: {exc}')
        opt = str(input(f'We can offer you up to {times} exchange rates.\nWould you like to proceed?\n 1. Yes \n 2. Assign New rate (random)\nOption:'))
        while opt not in ('1','2'):
            opt = print('You have selected an invalid option.\nWould you like to proceed?\n 1. Yes \n 2. Assign New rate (random)\nOption:')
        if opt == '1':
            return exc
    else:
        print(f'You can not request new exchange rates.')
    return exc    

def currency_promp(list,type):
    print(f'What is the exchage {type} currency?')
    print('Available Currencies:')
    prettyprint_list(list,'\\')
    value = str(input(f'{type} Currency: '))
    while value not in (list):
        print('Please input a valid currency.\nAvailable Currencies:')
        prettyprint_list(list,'\\')
        value = str(input(f'{type} Currency: '))
    return value

def exchange_operation(IC,IA,R):
    #just some unsolved operation
    if IC == 'PEN' :
        value = float(IA) / float(R)
    else:
        value = float(IA) * float(R)
    return value

def count_row(username):
    count = 0
    for element in (TRANSACTION_TABLE):
        if element[IND_TRAN_USERNAME] == username:
            count = count + 1
    return count

def save_transaction(V1,V2,V3,V4,V5,V6,V7,V8):

    #populate inner list
    new_row = []
    new_row.append(V1)
    new_row.append(V2)
    new_row.append(V3)
    new_row.append(V4)
    new_row.append(V5)
    new_row.append(V6)
    new_row.append(V7)
    new_row.append(V8)

    #populate final list
    TRANSACTION_TABLE.append(new_row)

    save_csv_file(TRANSACTION_FILE,TRANSACTION_TABLE,TRANSACTION_HEADER)

if __name__ == "__main__":
    main()
