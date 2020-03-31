# 10th March 2020

## Recap on last lesson
1. HTML Structures & basic elements
2. Created table in HTML
3. Implemented basic HTML elements

### CSS 
   - stands for Cascading Style Sheets
   - describes how HTML elements are to be displayed on screen, paper, or in other media
   - saves a lot of work. It can control the layout of multiple web pages all at once
   - External stylesheets are stored in CSS files

### Syntax
![CSS Syntax](./css&#32;syntax.png)
- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.
- A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

```
p {
  color: red;
  text-align: center;
}
```
- p is a selector in CSS (it points to the HTML element you want to style: <p>).
- color is a property, and red is the property value
- text-align is a property, and center is the property value

### Selectors
- element
- id
- class
- universal
  ```
  * {
   text-align: center;
   color: red;
  }
  ```
- grouping
  ```
  h1, h2, p {
   text-align: center;
   color: red;
  }
  ```

### Ways to insert CSS
- External CSS
- Internal CSS
- Inline CSS

### Comment
`/* This is a single-line comment */`

### Colors
- `background-color`
- `color`
- `border-color`

