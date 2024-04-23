1. Why do we need to `import React from "react"` in our files?
    -> React is what defines JSX


2. If i were to console.log(page) in index.js, what would show up?
    -> A `JavaScript object`. React elements that describe what React should eventually add to the real DOM for us


3. What's wrong with this code:
    ```js
    const page = (
        <h1>Hello</h1>
        <p>This is my website!</p>
    )
    ```
    -> We need our JSX to be nested under a `single parent` element


4. What does it mean for something to be `declarative` instead of `imperative`?
    -> Declarative
        => I tell the computer `WHAT` to do and expect it to handle the details
    -> Imperative
        => I tell it `HOW` to do each step


5. What does it mean for something to be `composable`?
    => We have small pieces that we can put together to make something larger/greater than the individual pieces.