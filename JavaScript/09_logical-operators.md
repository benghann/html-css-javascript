# Logical Operators

## || (OR)

``` JavaScript
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

``` JavaScript
if (1 || 0) { // works just like if( true || false )
  alert( 'Truthy' );
}
```

``` JavaScript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) { // ( false || false || true)
  alert( 'The office is closed.' ); // it is the weekend
}
```

### OR “||” finds the first truthy value
`result = value1 || value2 || value3;`

The OR || operator does the following:
- From left to right.
- If result == true, stops and returns the value
- If all false, returns the last operand.

### Quiz
``` JavaScript
alert( 1 || 0 );  // 1

alert( null || 1 ); // 1
alert( null || 0 || 1 ); // 1

alert( undefined || null || 0 ); // 0
```

``` JavaScript
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");  // SuperCoder
```

## && (AND)
`result = a && b;`

``` JavaScript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

``` JavaScript
if (1 && 0) { // evaluated as true && false
  alert( "Falsy" );
}
```

``` JavaScript
let hour = 12;
let minute = 30;
let isSaturday = false;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (hour == 12 && minute == 00 && isSaturday) {
  alert( 'Now is 12PM on Saturday' );
}
```

### AND “&&” finds the first falsy value
`result = value1 && value2 && value3;`

The AND && operator does the following:
- From left to right.
- If result == false, stops and returns the value
- If all true, returns the last operand.

``` JavaScript
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

``` JavaScript
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3
```

> Precedence of AND && is higher than OR ||
> `a && b || c && d` => `(a && b) || (c && d)`

## ! (NOT)
`result = !value;`
- Returns the inverse value.

``` JavaScript
alert( !true ); // false
alert( !0 ); // true

alert( !(!("non-empty string")) ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```