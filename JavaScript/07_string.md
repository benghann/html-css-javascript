# Strings

## Description
- It's like a text
`var x = "John Doe";`

- Single quote & double quote
``` JavaScript
var carName1 = "Nissan Sentra";  // Double quotes
var carName2 = 'Mazda 5';  // Single quotes
```

- With both single quote & double quote
``` JavaScript
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';
```

### Escape Character
- backslash escape character `\`
- eg. `\\` `\'` `\"`
- `var x = "We are the so-called \"Vikings\" from the north.";`
- `var x = 'It\'s alright.';`
- `var x = "The character \\ is called backslash.";`

### Escape Code
| Code | Result |
|---|---|
| \b | Backspace |
| \f | Form Feed |
| \n | New Line |
| \r | Carriage Return |
| \t | Horizontal Tabulator |
| \v | Vertical Tabulator |

### String can be object
- Using `new` keyword
``` JavaScript
var x = "John"; // string
var y = new String("John"); // object

typeof x // string
typeof y // object

`x == y` // true - comparing value == "John"
`x === y` // false - string vs object

var x = new String("John");
var y = new String("John");
`x == y` // false - object comparison

var personA = {
    firstName: "Beng Han",
}

var personB = {
    firstName: "Beng Han",
}

`personA == personB` // false
`personA.firstName == personB.firstName` // string == string // true
```

- Why dont use string as object? Slow down execution speed

## String methods
``` JavaScript
var x = ["mazda", "nissan"]
x[0] // "mazda"
x[1] // "nissan"

var person = {
    firstName: "Beng Han",
    lastName: "Ng",
}

var firstName = "firstName";
person["firstName"] // "Beng Han"
person[firstName] // "Beng Han"
```

``` JavaScript
// string is immutable
var x = "ABC";
var x = ["A", "B", "C"];
x[0] // A
x[0] = "D"
x = ["D", "B", "C"]
x[0] // A
x[0] = "ABC";
console.log()
x[0] // A
x[1] // B
x[2] // C
x[3] // undefined
```

> First position is always zero

### Get String Length
``` JavaScript
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringLength = text.length;
```

### Finding a String in a String
#### `string.indexOf()` && `string.lastIndexOf`
- returns the position of the occurrence of a specified text in a string
``` JavaScript
var text = "Please locate where 'locate' occurs!";
var position = text.indexOf("locate"); // 7
var lastLocatePosition = text.lastIndexOf("locate"); // 21
var startFrom15Position = text.indexOf("locate", 15); // Second parameter as starting position 21
```

#### `string.search()`
- search string & return position of match

#### Difference:
- `search()` => cannot take a second start position argument.
- `indexOf()` => cannot take regular expressions.

### Extracing String Parts
#### `slice()`
- extracts a part of a string and returns the extracted part in a new string.
``` JavaScript
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // Banana
var res = str.slice(-12, -6); // Banana
var res = str.slice(7); // Banana, Kiwi
var res = str.slice(-12); // Banana, Kiwi
```

#### `substring()`
- same as `slice()` but doesn't accept negative values
``` JavaScript
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13); // Banana
```

#### `substr()`
- same as `slice()` but second parameter specifies the length of extracted part
``` JavaScript
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); // Banana
```

### Replacing String Content
- replaces a specified value with another value in a string
- only the first match
- case sensitive
- support regular expression
- `/i` - ignore case sensitive
- `/g` - replace all matching use

``` JavaScript
var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "Google"); // Please visit Google!
var n = str.replace("MicROSOFT", "Google"); // Please visit Microsoft!
var n = str.replace(/MICROSOFT/i, "Google"); // Please visit Google!
var str = "Please visit Microsoft and use Microsoft!";
var n = str.replace("Microsoft", "Google"); // Please visit Google and use Microsoft!
var n = str.replace(/MICROSOFT/ig, "Google") // Please visit Google and use Google!
```

### Convert string case
``` JavaScript
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();
var text2 = text1.toLowerCase();
```

#### `concat()`
