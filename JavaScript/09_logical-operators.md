# Logical Operators

## || (OR)

``` JavaScript
alert( true || true );   
alert( false || true );  
alert( true || false );  
alert( false || false ); 
```

``` JavaScript
if (1 || 0) { // works just like if( true || false )
  alert( 'Truthy' );
}
```

``` JavaScript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
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
alert( 1 || 0 ); 

alert( null || 1 );
alert( null || 0 || 1 );

alert( undefined || null || 0 );
```

``` JavaScript
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");
```

## && (AND)
`result = a && b;`

``` JavaScript
alert( true && true );  
alert( false && true ); 
alert( true && false ); 
alert( false && false );
```

``` JavaScript
if (1 && 0) { // evaluated as true && false
  alert( "Falsy" );
}
```

``` JavaScript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
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
alert( 1 && 0 );
alert( 1 && 5 );

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 );
alert( 0 && "no matter what" );
```

``` JavaScript
alert( 1 && 2 && null && 3 );
alert( 1 && 2 && 3 );
```

> Precedence of AND && is higher than OR ||
> `a && b || c && d` => `(a && b) || (c && d)`

## ! (NOT)
`result = !value;`
- Returns the inverse value.

``` JavaScript
alert( !true );
alert( !0 );

alert( !!"non-empty string" );
alert( !!null );

alert( Boolean("non-empty string") );
alert( Boolean(null) );
```