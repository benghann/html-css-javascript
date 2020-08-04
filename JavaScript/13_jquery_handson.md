# jQuery Hands On
## Attr
- retrieve attributes of an element (string)
- eg. `$("#id").attr("href")` => Get value of the attribute 'href' on element

## preventDefault()
- only apply to event action
- prevent default action being applied
- eg. `event.preventDefault()`

## offset()
- return offset of an element (object)
- eg. `$(this).offset()`

## parents()
- return all parents of an element (array)
- eg. `$(this).parents()`
- to retrieve particular parents put it in parameter
- eg. `$(this).parents('.nav-item')`

## parent()
- return the first parent of an element (array)
- eg. `$(this).parent()`

## addClass()
- add classname given to an element
- eg. `$(this).addClass(className)`

## removeClass()
- remove classname given from an element
- eg. `$(this).removeClass(className)`

## outerHeight()
- retrieve outer height of an element
- eg. `$(this).outerHeight()`

## each()
- iterate (loop) all the elements selected
- eg. `$('div').each(func)`

## Math functions
- Math.floor(368.75) // 368
- Math.round(368.75) // 369
- Math.ceil(368.75) // 369

## off(event)
- unbind / remove the event handle stated
- eg. `$('div').off('click')`