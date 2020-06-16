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

## Predefined keywords
- `var`
- `new`
- `this`

### The `this` Keyword
- Refer to "owner of the function"
- `this.firstName` = `firstName` of the object

## Object methods
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