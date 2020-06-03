# Function
## Predefined Functions
- `console.log(value)`: Writing into the browser console
- `document.write()`: Writing into the HTML output
- `window.alert()`: Writing into an alert box
- `getElementById()`
  - `value`
  - `innerHTML`: Writing into an HTML element
  - `style`:

## Syntax
``` JavaScript
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

``` JavaScript
function multiply(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```

## Examples
``` Javascript
var parameter1 = function() {
  window.alert("Timeout!")
}
var parameter2 = 3000 // 3 second = 3000 millisecond
setTimeout(paramenter1, parameter2);

setTimeout(function() {
    // write your own logic
    window.alert("Timeout!");
}, 3000);
```

``` Javascript
setInterval(function() {
    z += 1; // z = z + 1;
    console.log(z);
}, 1000);
```

# Object
## Accessing Objects
- `objectName.propertyName`
  - eg. bengHan.lastName
- `objectName[propertyName]`
  - eg. bengHan["lastName"]

``` JavaScript
var bengHan = {
  firstName: "Beng Han",
  lastName: "Ng",
  car1: "Mazda",
  car2: "Nissan",
}
```
``` JavaScript
var string = "lastName"
var x = 1
bengHan[string] // bengHan["lastName"] = "Ng"
bengHan["car"+x] // bengHan["car1"] = "Mazda"
```


``` JavaScript
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;  // John Doe
  }
};
```
### Predefined keywords
- `var`
- `new`
- `this`

#### The `this` Keyword
- Refer to "owner of the function"
- `this.firstName` = `firstName` of the object

#### Object methods
- `objectName.methodName()`
- eg. `person.fullName()`
- without `()` => function definition
``` JavaScript
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;  // John Doe
  },
  nicknameWithFullName: function() {
    var fullName = this.fullName(); // "John Doe"
    var nickname = "Beng"; // "Beng
    return fullName + " " + "(" + nickname + ")"; // "John Doe (Beng)"
  }
};

person.firstName // "John"
person.id // 5566
person.fullName() // John Doe
person.fullName // function() {}
```


## JavaScript Events
- HTML events are "things" that happen to HTML elements.
- JavaScript can "react" on these events.
- Example:
  - An HTML web page has finished loading
  - An HTML input field was changed
  - An HTML button was clicked

``` JavaScript
<element event='some JavaScript'>
```

Example
``` JavaScript
<img onload="window.alert('Loading')">
<input onchange="">
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
```


