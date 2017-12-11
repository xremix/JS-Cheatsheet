# JS Cheat Sheet
*This is WIP, just a couple of notes for ES6 and stuff*


## Other References
https://github.com/mbeaudru/modern-js-cheatsheet
https://github.com/DrkSephy/es6-cheatsheet

## Let vs. Var vs. Const
```JS
var x; // Good old vars
const x; // Can not be changed
let x; // Block scoped, not accessible before assigning, can't get redeclaed in scope
```

## Arrow Functions

```JS
// ES6
var eq = (para, parb) => para == parb;

// Old Vanilla JS
var eq = function(para, parb){
	return para == parb;
}
```

## Default Parameter
```JS
function f (x, y = 7, z = 42) {
    return x + y + z
}
```

## String Interpolation
```JS
const name = "Peter";
var helloMessage = `Hello ${name},
I hope you are doing good?
Warm Regards`;
```

## Shorthand Properties
Set an object without having to define property names

```
var a = 'Hello';
var b = 'World';
// ES6 can
var c = {a,b};
// Instead of
var c = {a: a, b: b};
```