
## Type Conversions
### String Conversion
``` JavaScript
let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // string "true" 
```

### Numeric Conversion
- happens in mathematical functions and expressions automatically.

Eg. 1:
`alert( "6" / "2" );` // 3

Eg. 2:
``` JavaScript
let str = "123";
alert(typeof str); // string

let num = Number(str);
alert(typeof num); // number - 123

let age = Number("a string");
alert(age); // NaN
```

### Boolean Conversion
- if values == "empty" (ie. 0 || "" || null || undefined || NaN) => false.
- else => true.
``` JavaScript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // true
```
