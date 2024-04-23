1. What is a React component?
    -> A function that returns React elements. (UI)


2. What's wrong with this code?
```js
function myComponent() {
    // myComponent => MyComponent
    return (
        <small>I'm tiny text!</small>
    )
}
```


3. What's wrong with this code?
```js
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
// -> Header() => <Header />
```