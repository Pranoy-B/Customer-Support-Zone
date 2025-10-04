What is JSX, and why is it used?

Ans: JSX is the short form of "JavaScript Xml". It's special kind of syntax which helps us to write Html in JavaScript. We use it in React to make the code clean, for faster performance etc.

 - What is the difference between State and Props?

 Ans: Props which is short for Properties are like the arguments we pass into the function in JavaScript. It allows data to flow from parent component to child component. Props are immutable. State is a built-in object in React where we can store data. Since data can change over time, State is mutable.


 - What is the useState hook, and how does it work?

Ans: useState hood is used to add State to functional components. Whenever the useState is used, it has a default value set by the user and then based on the function it is set on or called on, everytime the UI renders or re-renders it updates the State.

 - How can you share state between components in React?

Ans: We can do that by the method called "Lifting Up the State".

 - How is event handling done in React?

 Ans: Event handling in React are almost as same as in Html. But there are difference the syntax. Such as in Html we use "onclick" but in React, it is "onClick". Also in React we do not call any function immediately in the event handler, We send it as a props or wrap it inside an arrow function.