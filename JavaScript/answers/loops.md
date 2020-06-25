1. The answer: 1.
    ``` JavaScript
    let i = 3;
    alert(i--); // shows 3, decreases i to 2
    alert(i--) // shows 2, decreases i to 1
    alert(i--) // shows 1, decreases i to 0
    // done, while(i) check stops the loop
    ```

2. Which values does the while loop show?
   - Condition 1 - Answer: From 1 to 4
     - The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1

     - Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.
      
     - Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

   - Condition 2 - Anwer: From 1 to 5
     - The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

     - But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

     - Then follow 2, 3, 4…

     - Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

     - The value i = 5 is the last one, because on the next step while(5 < 5) is false.
    
3. Which values get shown by the "for" loop?
   - The answer: from 0 to 4 in both cases.
   - ``` JavaScript
       for (let i = 0; i < 5; ++i) alert( i );

       for (let i = 0; i < 5; i++) alert( i );
       ```
   - That can be easily deducted from the algorithm of for:

   - Execute once i = 0 before everything (begin).
     1. Check the condition i < 5
     2. If true – execute the loop body alert(i), and then i++
     3. The increment i++ is separated from the condition check (2). That’s just another statement.

   - The value returned by the increment is not used here, so there’s no difference between i++ and ++i.

4. Output even numbers in the loop
   - ``` JavaScript
       for (let i = 2; i <= 10; i++) {
       if (i % 2 == 0) {
           alert( i );
       }
       }
       ```
   - We use the “modulo” operator % to get the remainder and check for the evenness here.

5. Replace "for" with "while"
    ``` JavaScript
    let i = 0;
    while (i < 3) {
    alert( `number ${i}!` );
    i++;
    }
    ```

6. Repeat until the input is correct
    ``` JavaScript
    let num;

    do {
    num = prompt("Enter a number greater than 100?", 0);
    } while (num <= 100 && num);
    ```
    - The loop do..while repeats while both checks are truthy:
        1. The check for num <= 100 – that is, the entered value is still not greater than 100.
        2. The check && num is false when num is null or a empty string. Then the while loop stops too.
    - P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.

7. Output prime numbers
    ``` JavaScript
    // Let’s use a nested loop:
    For each i in the interval {
    check if i has a divisor from 1..i
    if yes => the value is not a prime
    if no => the value is a prime, show it
    }

    // The code using a label:
    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
    }

    alert( i ); // a prime
    }
    ```
    - There’s a lot of space to optimize it. For instance, we could look for the divisors from 2 to square root of i. But anyway, if we want to be really efficient for large intervals, we need to change the approach and rely on advanced maths and complex algorithms like Quadratic sieve, General number field sieve etc.
