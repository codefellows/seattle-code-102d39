# Functions

## Why do we use functions?

- To execute code - all functions do at least 1 thing.
- So we can REUSE code that we write.

---

## What does defining a function look like?

This is the basic structure:

```javascript
function funcName(){}
```

- `function` is the keyword we need to say "Hey, I'm about to write a function"
- `funcName` is where we get to pick a unique name for our function
- `()` is where **parameters** will go if we want to give our function extra data
- `{}` is where we will write the code we want our function to execute

It will more often look like this:

```javascript
function funcName(){
    // code to execute goes in here
}
```

Example:

```javascript
function addNumbers(a, b){
    let total = a + b
    return total
}
```

- this function has the name `addNumbers`
- it will have 2 *parameters*, `a` and `b`
- The code it executes will be:
  - declaring a variable called `total`
  - adding `a` and `b` and storing the result in the variable `total`
  - returning the value of `total`

---

## How do we use a function?

We wrote a function (you can think of it as a command with individual steps listed inside, or a set of rules) and gave it a name.

To USE this command, we need to invoke it.

- Invoking a function is also referred to as "calling it"

Using the example function above, with our `addNumbers` function, invoking it looks like this:

```javascript
addNumbers(1, 3);
```

- When we invoke this function, we are giving it 2 *`arguments`*
- The *`arguments`* will be the numbers this function is expecting in order to add them together
