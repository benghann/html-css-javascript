# Conditional Operators

1. Will `alert` be shown? // Yes
``` JavaScript
var text = "0"
if (text) { // Boolean("0") => true
  alert( 'Hello' );
}

if ("") { // Boolean("") => true
  alert( 'Hello' );
}

// Frontend input: x & y => x / y
// x/y => y = 0 => infinity
if (y) {
  return x / y;
} else {
  return "y cannot be zero";
}
```

2. Using if..else, write the code which gets a number via prompt and then shows in alert:

- 1, if the value is greater than zero,
- -1, if less than zero,
- 0, if equals zero.


``` JavaScript
// Answer:
var number = prompt("Enter a number");
var answer;
// start
// solution 1: if ... else if ... else
if (number > 0) {
  answer = 1;
} else if (number < 0) {
  answer = -1;
} else { // or `else if (number == 0)`
  answer = 0;
}

// solution 2: '?' operator
answer = (number > 0) ? 1 : (number < 0) ? -1 : 0;
// ===== Can be read as 
if (number > 0) {
  answer = 1
} else {
  if (number < 0) {
    answer = -1;
  } else {
    answer = 0;
  }
}
// ===== end

// end
alert(answer);
// =================
```

3. Rewrite this if using the conditional operator '?':
``` JavaScript
var a = 10;
var b = 0;
var result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

// Answer:
var result = (a + b < 4) ? "Below" : "Over";
```

4. Rewrite if..else using multiple ternary operators '?'.
``` JavaScript
var message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// Answer: 
var message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
```