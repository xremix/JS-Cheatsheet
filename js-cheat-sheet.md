# JS Cheat Sheet
Summary of a couple of interesting code snippets arround JS, ES6, etc.

## Overview
- [Misc](#misc)
- [Basics](#basics)
- [Maps](#maps)
- [Classes](#classes)
- [Promises](#promises)

## Misc

### JavaScript Versions

- **ES5** standardized in 2009, widely supported.
- **ES6 / ECMAScript 2015** standardized in 2015. Most modern browsers support it
- **ES7 / ECMAScript 2016** is a smaller release from 2016. `Array.prototype.includes` will obsolete the old function `Array.prototype.contains`. There is also a new exponent operator (2^3 == `2 ** 3`)
- **ES8 / ECMAScript 2017** includes features like String Padding, `Object.values` and `Object.entries`, **Async functions**, Trailing Commas**,**
- **ES9** will mostly lift template literal restrictions

### Resources
References, useful and interesting links.

- [ES6 Features](http://es6-features.org/#Constants)
- [New Features in ES8 and ES9](https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66)
- https://github.com/mbeaudru/modern-js-cheatsheet
- https://github.com/DrkSephy/es6-cheatsheet
- [30 Seconds of Code (Github)](https://github.com/Chalarangelo/30-seconds-of-code)
- [Frontend Dev Resources](https://github.com/dmytroyarmak/frontend-dev-resources)
- [You Don't Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery)

## Basics

### Let vs. Var vs. Const
```JS
var x; // Good old vars
const x; // Can not be changed
let x; // Block scoped, not accessible before assigning, can't get redeclared in scope
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

### Blocks
To replace immediatly invoked funcitons
```JS
{
	let internal = "";
};
console.log(internal); // Will crash
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
ES6 Promise pattern, so there is no need anymore to use [q](https://github.com/kriskowal/q), but be aware of [no IE11 support](https://caniuse.com/#feat=promises)
```JS
function logAsync(text) {
    return new Promise(
        function (resolve, reject) {

            setTimeout(function(){
              console.log(text)
              resolve();              
            }, 100);
            //reject("error");
        });
}

logAsync("Log me async")
.then(result => { console.log("Here we go")})
.catch(error => { console.log("Something didn't work") });
```