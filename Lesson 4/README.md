# 24th March 2020

## Recap on last lesson
1. Introduction about CSS
2. Background, Color
3. Margin & Padding
4. Font, Text, Border

### CSS Box Model
![](./CSS&#32;Box&#32;Model.png)
1. Content - The content of the box, where text and images appear
2. Padding - Clears an area around the content. The padding is transparent
3. Border - A border that goes around the padding and content
4. Margin - Clears an area outside the border. The margin is transparent

### Position
- static: HTML elements are positioned static by default.
- relative: positioned relative to its normal position.
- fixed: positioned relative to the viewport.
- absolute: positioned relative to the nearest positioned ancestor
- sticky: positioned based on the user's scroll position.

### Overflow
- visible: Default. The content renders outside the element's box
- hidden: The overflow is clipped, and the rest of the content will be invisible
- scroll: The overflow is clipped, and a scrollbar is added to see the rest of the content
- auto: Similar to scroll, but it adds scrollbars only when necessary

### Float
Specifies how an element should float.

### Opacity
Transparency of an element

### Pseudo classes
- `:active` => `Selects the active link`
- `:checked` => `Selects every checked <input> element`
- `:disabled` => `Selects every disabled <input> element`
- `:empty` => `Selects every <p> element that has no children`
- `:enabled` => `Selects every enabled <input> element`
- `:first-child` => `Selects every <p> elements that is the first child of its parent`
- `:first-of-type` => `Selects every <p> element that is the first <p> element of its parent`
- `:focus` => `Selects the <input> element that has focus`
- `:hover` => `Selects links on mouse over`
- `:in-range` => `Selects <input> elements with a value within a specified range`
- `:invalid` => `Selects all <input> elements with an invalid value`
- `:lang(language)` => `Selects every <p> element with a lang attribute value starting with "it"`
- `:last-child` => `Selects every <p> elements that is the last child of its parent`
- `:last-of-type` => `Selects every <p> element that is the last <p> element of its parent`
- `:link` => `Selects all unvisited links`
- `:not(selector)` => `Selects every element that is not a <p> element`
- `:nth-child(n)` => `Selects every <p> element that is the second child of its parent`
- `:nth-last-child(n)` => `Selects every <p> element that is the second child of its parent, counting from the last child`
- `:nth-last-of-type(n)` => `Selects every <p> element that is the second <p> element of its parent, counting from the last child`
- `:nth-of-type(n)` => `Selects every <p> element that is the second <p> element of its parent`
- `:only-of-type` => `Selects every <p> element that is the only <p> element of its parent`
- `:only-child` => `Selects every <p> element that is the only child of its parent`
- `:optional` => `Selects <input> elements with no "required" attribute`
- `:out-of-range` => `Selects <input> elements with a value outside a specified range`
- `:read-only` => `Selects <input> elements with a "readonly" attribute specified`
- `:read-write` => `Selects <input> elements with no "readonly" attribute`
- `:required` => `Selects <input> elements with a "required" attribute specified`
- `:root` => `Selects the document's root element`
- `:target` => `Selects the current active #news element (clicked on a URL containing that anchor name)`
- `:valid` => `Selects all <input> elements with a valid value`
- `:visited` => `Selects all visited links`

### Flexbox
https://flexboxfroggy.com/
