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

```
// ES6
var eq = (para, parb) => para == parb;

// Old Vanilla JS
var eq = function(para, parb){
	return para == parb;
}
```