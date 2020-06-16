# Conditional Operators
## The “if” statement
- The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

``` JavaScript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// single statement. No need curly bracket `{}`
if (year == 2015) alert('You are right!');

if (year == 2015) {
    alert("That's correct!");
    alert("You're so smart!");
}
```

## The “else” clause
``` JavaScript
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// Single statement
if (year == 2015)
  alert( 'You guessed it right!' );
else
  alert( 'How can you be so wrong?' ); // any value except 2015


if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

// Single statement
if (year == 2015)
  alert( 'You guessed it right!' );
  alert( 'You guessed it right!' );
else
  alert( 'How can you be so wrong?' ); // any value except 2015
```

## Several conditions: “else if”
``` JavaScript
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

// Is a student
// <= 18 => Student
// >= 25 => Adult
// 22 => Youngster
// 21 ==> nothing happend
if (age <= 18) {
  alert( 'Student' );
} else if (age >= 25) {
  alert( 'Adult' );
} else if (age == 22) {
  alert( 'Youngsters!' );
}
```

## Conditional operator ‘?’
``` JavaScript
// Original
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// With '?' operator
let accessAllowed = (age > 18) ? true : false;
let accessAllowed = age > 18 ? true : false;
let accessAllowed = age > 18;

let age = prompt('How old are you?', '');
// if...else
var message = "";
if (age > 18) {
  message = "You are allowed to enter the bar";
} else {
  message = "You must be at least 18 y/o to enter";
}
// '?' operator
var message = age > 18 ? "You are allowed to enter the bar" : "You must be at least 18 y/o to enter"
alert(message);
```

## Multiple ‘?’
``` JavaScript
// With '?' operator
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// With if, else if, else
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

## Tutorial
[Head to Tutorial Questions](./tutorials/conditional-operators.md)

