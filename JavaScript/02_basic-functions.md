# JavaScript Functions

## Predefined Functions
- `console.log(value)`: Writing into the browser console
- `document.write()`: Writing into the HTML output
- `window.alert()`: Writing into an alert box
- `getElementById()`
  - `value`
  - `innerHTML`: Writing into an HTML element
  - `style`:

## Interaction: alert, prompt, confirm
### Alert
`alert("Hello");`

### Prompt
- shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
`result = prompt(title, [default]);`

Eg:
``` JavaScript
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`);
```

### Confirm
- shows a modal window with a question and two buttons: OK and Cancel.

Eg:
``` JavaScript
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
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


setInterval(function() {
    z += 1; // z = z + 1;
    console.log(z);
}, 1000);
```