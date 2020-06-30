# Logical Operator
1. 2
2. first 1, then 2.
3. null
4. 1, then `undefined`
5. 3
6. `if (age >= 14 && age <= 90)`
7. `if (!(age >= 14 && age <= 90))` or `if (age < 14 || age > 90))`

8. 
``` JavaScript
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
```