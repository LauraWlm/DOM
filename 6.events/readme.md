# Working with events

## What is an event?

Any action that is triggered by the user is called an event. 

## The 3 key elements of an event

### The trigger

An event is always triggered by an action, it could be anything ranging from :

- A mouseclick
- A movement of the mouse pointer
- A key has been pressed on the keyboard
- The screen was resized
- The window is being scrolled
- The page has finished loading
- A CSS animation is playing

[and many, many more...](https://developer.mozilla.org/en-US/docs/Web/Events)

### The target 

The target is the element that will receive the action. Could be the body of the page, could be the a button, could be a form field such as a text input, etc. Really anything that is displayed on the page, whether it is there at page load or generated using Javascript could be a target


### The callback

The callback is the consequence of the event, it's a function that will be executed once an action is triggered on a target.

