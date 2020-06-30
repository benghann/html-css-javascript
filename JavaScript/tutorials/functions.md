# Functions

1. Is "else" required?
    The following function returns true if the parameter age is greater than 18.

    Otherwise it asks for a confirmation and returns its result:
    ``` JavaScript
    function checkAge(age) {
        if (age > 18) {
            return "You are an adult"; // continue => for loop, break => for, while loop, return => return value & exit function
        } 
        return "You are too young to enter";
    }

    checkAge(20) // alert(checkAge(20)) => alert("You are an adult")
    ```

    Will the function work differently if else is removed?

    ``` JavaScript
    function checkAge(age) {
        if (age > 18) {
            return "You are an adult";
        }
        // ...
        return "You are too young to enter";
    }
    ```

    Is there any difference in the behavior of these two variants?

2. Rewrite the function using '?' or '||'
    The following function returns true if the parameter age is greater than 18.

    Otherwise it asks for a confirmation and returns its result.

    ``` JavaScript
    function checkAge(age) {
        if (age > 18) {
            return "You are an adult";
        } else {
            return "You are too young to enter";
        }
    }
    ```

    Rewrite it, to perform the same, but without if, in a single line.

    Make two variants of checkAge:

    1. Using a question mark operator ?
    2. Using OR ||

    ``` JavaScript
    function checkAge(age) {
       return (age > 18 ? "You are an adult" : "You are too young to enter");
    }

    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return "You are too young to enter";
        }
    }

    function checkAge(age) {
       return age > 18 || "You are too young to enter"; // true || "You are too young to enter" or false || "You are too young to enter"
    }
    ```

3. Function min(a, b)
    Write a function min(a,b) which returns the least of two numbers a and b.

    Example:
    ``` JavaScript
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
    ```

4. Function pow(x,n)
    Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

    Example:
    ``` JavaScript
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
    ```

    Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

    > P.S. In this task the function should support only natural values of n: integers up from 1.