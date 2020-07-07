# jQuery
## What is jQuery?
- lightweight
- write less, do more
- JavaScript library
- easier to use JavaScript on website
- Features
  - HTML/DOM manipulation
  - CSS manipulation
  - HTML event methods
  - Effects and animations
  - AJAX
  - Utilities

## Setup jQuery
- Download from http://jquery.com/download/
  - `<script src="jquery-3.5.1.min.js"></script>`
- use CDN 
  - `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

## Syntax
`$(selector).action()`
- `$` => jQuery
- `selector` => HTML elements
- `action()` => jQuery actions

### Examples
``` JavaScript
$(this).hide() // hides the current element.

$("p").hide() // hides all <p> elements.

$(".test").hide() // hides all elements with class="test".

$("#test").hide() // hides the element with id="test".
```

## Document Ready Event
``` JavaScript
$(document).ready(function(){

  // jQuery methods go here...

});

// or

$(function(){

  // jQuery methods go here...

});
```
### Why?
- prevent any jQuery code from running before the document is finished loading (is ready). eg.
  - Trying to hide an element that is not created yet
  - Trying to get the size of an image that is not loaded yet


## Selectors
- Same as CSS
- Element selector 
  - `$("*")` => Selects all elements
  - `$(this)` => Selects the current HTML element
  - `$("p")` => Selects all `<p>` elements 
- Class selector
  - `$(".text-blue")` => Selects all elements with class="text-blue"
  - `$("p.intro")` => Selects all `<p>` elements with class="intro"
- ID selector
  - `$("#test")` => Selects element with id="test"
- Attribute selector
  - `$("ul li:first-child")` => Selects the first `<li>` element of every **`<ul>`**
  - `$("[href]")` => Selects all elements with an href attribute
  - `$("a[target='_blank']")` => Selects all `<a>` elements with a target attribute value equal to "_blank"
  - `$("tr:even")` => Selects all even `<tr>` elements

## Event methods
- visitors' actions that a web page can respond to are called events. eg.
  - moving a mouse over an element
  - selecting a radio button
  - clicking on an element
-  DOM events
    | Mouse | Keyboard | Form | Document / Window |
    | --- | --- | --- | --- |
    | click | keypress | submit | load |
    | dblclick | keydown | change | resize |
    | mouseenter | keyup | focus | scroll |
    | mouseleave |   | blur | unload |

### Syntax
``` JavaScript
$("p").click(function() {
  // action goes here!!
});
```

### Common methods
- `$(document).ready()` => execute a function when the document is fully loaded
- `click()` => executed when the user clicks on the HTML element.
  ``` JavaScript
  $("p").click(function(){
    $(this).hide();
  });
  ```
- `dblclick()` => executed when the user double-clicks on the HTML element
    ``` JavaScript
    $("p").dblclick(function(){
    $(this).hide();
    });
    ```
- `mouseenter()` => executed when the mouse pointer enters the HTML element
    ``` JavaScript
    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    });
    ```
- `mouseleave()` => executed when the mouse pointer leaves the HTML element
    ``` JavaScript
    $("#p1").mouseleave(function(){
        alert("Bye! You now leave p1!");
    });
    ```
- `mousedown()` => executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element
    ``` JavaScript
    $("#p1").mousedown(function(){
        alert("Mouse down over p1!");
    });
    ```
- `mouseup()` => executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element
    ``` JavaScript
    $("#p1").mouseup(function(){
        alert("Mouse up over p1!");
    });
    ```
- `hover()` => combination of the mouseenter() and mouseleave()
    ``` JavaScript
    $("#p1").hover(function(){
        alert("You entered p1!");
    },
    function(){
        alert("Bye! You now leave p1!");
    });
    ```
- `focus()` => executed when the form field gets focus
    ``` JavaScript
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    ```
- `blur()` => executed when the form field gets focus
    ``` JavaScript
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    ```
- `on()` => one or more event handlers for the selected elements
    ``` JavaScript
    // Example 1
    $("p").on("click", function(){
        $(this).hide();
    });

    // Example 2
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });

    // Example 3
    $("p").on("click hover", function(){
        $(this).hide();
    });
    ```