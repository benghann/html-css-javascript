## Data Types
``` JavaScript
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```

### String
Text, eg. `"Hello World"`

### Number 
Integer, Float / Double, eg. `123`
  
### Boolean
``` JavaScript
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
```

### Arrays
- Written with square brackets `[]`
- Separated by commas `,`
- `var cars = ["Saab", "Volvo", "BMW"];`
- `var numbers = [0, 3, 7];`

### Objects
- Written with curly braces `{}`
- name:value pairs, separated by commas
- `var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`

### Undefined
- A variable without a value, Type & values are `undefined`
- `var car;    // Value is undefined, type is undefined`
  
### Empty Value
- Nothing to do with `undefined`
- `var car = "";    // The value is "", the typeof is "string"`
  
### Null: 
- Nothing
- `var person = null;`

### Difference Between `Undefined` and `Null`
- `undefined` and `null` are equal in value but different in type
``` JavaScript
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```

### Primitive Data
- string
- number
- boolean
- undefined

``` JavaScript
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
```

### Complex Data
- function
- object

``` JavaScript
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
```
