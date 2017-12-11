# JS Cheat Sheet
*WIP*
Summary of a couple of interesting code snippets arround JS, ES6, etc.

- *ES5* standardized in 2009
- *ES6 / ECMAScript 2015* standardized in 2015. Most modern browsers support it [See features](http://es6-features.org/#Constants)
- *ECMAScript 2016* is a smaller release. `Array.prorotype.includes` will obsolete the currently used Àrray.prototype.contains` and exponent operator (2^3 == `2 ** 3`)

## Basics

### Other References
https://github.com/mbeaudru/modern-js-cheatsheet
https://github.com/DrkSephy/es6-cheatsheet

### Let vs. Var vs. Const
```JS
var x; // Good old vars
const x; // Can not be changed
let x; // Block scoped, not accessible before assigning, can't get redeclaed in scope
```

### Arrow Functions

```JS
// ES6
var eq = (para, parb) => para == parb;

// Old Vanilla JS
var eq = function(para, parb){
	return para == parb;
}
```

### Default Parameter
```JS
function f (x, y = 7, z = 42) {
    return x + y + z
}
```

### String Interpolation
```JS
const name = "Peter";
var helloMessage = `Hello ${name},
I hope you are doing good?
Warm Regards`;
```

### Shorthand Properties
Set an object without having to define property names

```JS
var a = 'Hello';
var b = 'World';
// ES6 can
var c = {a,b};
// Instead of
var c = {a: a, b: b};
```

So we can also...
```JS
let f = () => {
  var a = 1;
  var b = 2;
  return {a, b};
};

var {a,b} = f();
```

Another sample of function in an object
```JS
var funcinator = {
	stateOfTheArt(instead, of){

	},
	theOldWay: function(you, know){

	}
};
```
Dynamic Generated Property Names
```JS
var propertyNameSuffix = "test";
var dynProp = {
		["my-new" + propertyNameSuffix](){
	}
};
```

## Maps
Usage of a JS Hashmap
```JS
let m = new Map();
m.set("Hell", "World");
console.log(m.get("Hell"));
```

## Classes

## Class Sample
```JS
class CheatSheet{
	constructor(lang, text){
		this.lang = lang;
		this.text = text;
	}
	print(){
		console.log(`# ${this.lang}
			${this.text}`);
	}
}

class PetersCheatSheet extends CheatSheet{

}
var myCS = new PetersCheatSheet("Golang", "Here will be some text for Go");
myCS.print();
```

## Promises
WIP