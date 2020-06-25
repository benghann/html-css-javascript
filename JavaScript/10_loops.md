# Loops: while and for
- repeat actions

## The “while” loop
- While the condition is truthy, the code from the loop body is executed.
``` JavaScript
while (condition) {
  // code
  // so-called "loop body"
}
```

Eg. 1:
``` JavaScript
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i ); // alert(0), alert(1), alert(2)
  i++; // i += 1 => i = i + 1 => 1
}

```

Eg. 2:
``` JavaScript
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
```

Eg 3:
> If the loop body has a single statement, we can omit the curly braces {…}:
``` JavaScript
let i = 3;
while (i) alert(i--); // alert(3), alert(2), alert(1)

let i = 3;
while (i) alert(--i); // alert(2), alert(1), alert(0)
```

## The “do…while” loop
- first execute the body, then check the condition, and, while it’s truthy, execute it again and again
- used for function that needs to execute at least once
``` JavaScript
do {
  // loop body
} while (condition);
```

``` JavaScript
let i = 0;
do {
  alert( i ); // alert(0), alert(1), alert(2)
  i++;
} while (i < 3); 
```

## The “for” loop
``` JavaScript
for (begin; condition; step) {
  // ... loop body ...
}
```

Eg: 
``` JavaScript
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i); // alert(0), alert(1), alert(2)
}

for (let i = 0; i < 3; ++i) { // shows 0, then 1, then 2
    alert(i); // alert(0), alert(1), alert(2) 
}

let i = 0;
for (i = 1; i < 3; ++i) { // shows 1, then 2
    alert(i); // alert(1), alert(2)
}
```
| part | - | - |
| -- | -- | -- |
| begin | i = 0 | Executes once upon entering the loop. |
| condition | i < 3 | Checked before every loop iteration. If false, the loop stops. |
| body | alert(i) | Runs again and again while the condition is truthy. |
| step | i++ | Executes after the body on each iteration. |

### How it works
```
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

``` JavaScript
// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3
```

### Skipping parts
``` JavaScript
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
```

``` JavaScript
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

``` JavaScript
for (;;) {
  // repeats without limits
}
```


### Breaking the loops

``` JavaScript
let sum = 0;

while (true) {
  let value = prompt("Enter a number", '');
  
  if (!value) {
    break;
  }

  sum += Number(value);
}

alert("Sum: " + sum);

while (true) {
  let value = prompt("Enter your age", '');
  
  if (!value || !Number(value)) {
    alert("Please enter your age. It must be a number.");
  } else {
    break;
  }
}
```

## Class Examples:
``` JavaScript
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i ); // alert(0), alert(1), alert(2)
  i++; // i += 1 => i = i + 1 => 1
}

let i = 0;
while (i < 1) { // shows 0, then 1, then 2
    alert( i ); // alert(0), alert(0), alert(0) ~ infinite
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i ); // alert(3), alert(2), alert(1)
  i--;
}

let i = 3;
while (i) alert(i--); // alert(3), alert(2), alert(1)
while (i) alert(--i); // alert(2), alert(1), alert(0)

let i = 0;
do {
  alert( i ); // alert(0), alert(1), alert(2)
  i++;
} while (i < 3); 


for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i); // alert(0), alert(1), alert(2)
}

for (let i = 0; i < 3; ++i) { // shows 0, then 1, then 2
    alert(i); // alert(0), alert(1), alert(2) 
}

let i = 0;
for (i = 1; i < 3; ++i) { // shows 1, then 2
    alert(i); // alert(1), alert(2)
}


let i = 0;
for (; i < 3;) {
  alert( i++ ); // alert(0), alert(1), alert(2)
}

let i = 0;
for (; i < 3; i++) {
    alert( i++ ); // alert(0), alert(2)
}

for (let i = 2; i <= 10; i+=2) {
    alert(i); // alert(2), alert(4)
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) { // 2 => true, 3 => false, 4 => true
        alert(i);
    }
}
```
