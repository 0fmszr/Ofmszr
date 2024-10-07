# Enhanced Python Calculator

def add(x, y):
    return x + y
def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    try:
        return x / y
    except ZeroDivisionError:
        return "Error! Cannot divide by zero."

def power(x, y):
    return x ** y

def modulus(x, y):
    try:
        return x % y
    except ZeroDivisionError:
        return "Error! Cannot calculate modulus with zero."

def calculator():
    operations = {
        '1': ('Add', add),
        '2': ('Subtract', subtract),
        '3': ('Multiply', multiply),
        '4': ('Divide', divide),
        '5': ('Exponentiation', power),
        '6': ('Modulus', modulus)
    }

    while True:
        print("\nSelect operation:")
        for key, (name, _) in operations.items():
            print(f"{key}. {name}")

        choice = input("Enter choice (1/2/3/4/5/6 or 'q' to quit): ").strip()

        if choice == 'q':
            print("Exiting the calculator. Goodbye!")
            break

        if choice not in operations:
            print("Invalid choice! Please select a valid operation.")
            continue

        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            continue

        operation_name, operation_func = operations[choice]
        result = operation_func(num1, num2)
        print(f"\nResult of {operation_name} between {num1} and {num2} is: {result}")

        next_calc = input("\nDo you want to perform another calculation? (yes/no): ").strip().lower()
        if next_calc != 'yes':
            print("Thanks for using the calculator. Goodbye!")
            break

if __name__ == "__main__":
    calculator() 