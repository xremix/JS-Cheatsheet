# JS Cheat Sheet
Summary of code snippets arround modern JS, ES6, etc., as well as a couple of interesting resource links.

## Overview
- [Misc](#misc)
- [ES6 Basics](#es6-basics)
- [Maps](#maps)
- [Modules](#modules)
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
- [Modern JS Cheatshett by mbeaudru](https://github.com/mbeaudru/modern-js-cheatsheet)
- [ES6 Cheatsheet by DrkSephy](https://github.com/DrkSephy/es6-cheatsheet)
- [30 Seconds of Code (Github)](https://github.com/Chalarangelo/30-seconds-of-code)
- [Frontend Dev Resources](https://github.com/dmytroyarmak/frontend-dev-resources)
- [You Don't Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery)
- [Babel Online Transpiler](https://babeljs.io/repl/)

## ES6 Basics

### Let vs. Var vs. Const
```javascript
var x; // Good old vars
const x; // Can not be changed
let x; // Block scoped, not accessible before assigning, can't get redeclared in scope
```

### Arrow Functions

```javascript
// ES6
var eq = (para, parb) => para == parb;

// Old Vanilla JS
var eq = function(para, parb){
	return para == parb;
}
```

### Blocks
To replace immediatly invoked funcitons
```javascript
{
	let internal = "";
};
console.log(internal); // Will crash
```


### Default Parameter
```javascript
function f (x, y = 7, z = 42) {
    return x + y + z
}
```

### String Interpolation
```javascript
const name = "Peter";
var helloMessage = `Hello ${name},
I hope you are doing good?
Warm Regards`;
```

### Shorthand Properties
Set an object without having to define property names

```javascript
var a = 'Hello';
var b = 'World';
// ES6 can do
var c = {a,b};
// which gets the same result as
var c = {a: a, b: b};
```

So we can also...
```javascript
let f = () => {
  var a = 1;
  var b = 2;
  return {a, b};
};

var {a,b} = f();
```

Another sample of function in an object
```javascript
var funcinator = {
	stateOfTheArt(instead, of){

	},
	theOldWay: function(you, know){

	}
};
```
Dynamic Generated Property Names
```javascript
var propertyNameSuffix = "test";
var dynProp = {
		["my-new" + propertyNameSuffix](){
	}
};
```

## Maps
Usage of a JS Hashmap
```javascript
let m = new Map();
m.set("Hell", "World");
console.log(m.get("Hell"));
```

## Modules

### CommonJS Modules
CommonJS Modules are supported in Node.JS by default, but can also be used by using RequireJS, Browserify or [other Tools](https://web.archive.org/web/20120826205255/http://blog.brianbeck.com/post/10667967423/node-js-require-in-the-browser)

```javascript
// foobar.js
function foobar(){
        this.bar = function(){
                console.log('Hello bar');
        }
}
// Expose variables / public variables
exports.foobar = foobar;
```

```javascript
//main.js
var foobar = require('./foobar').foobar,
    myfoobar   = new foobar();
 
myfoobar.bar(); // 'Hello bar'
```

### ES6 Modules
Was designed with influence of CommonJS and AMD modules.
```javascript
// foobar.js
export foobar = {
	this.bar = function(){
		console.log('Hello bar');
	}
}
```
```javascript
// main.js
import {foobar} from 'foobar';
foobar.bar();
```

Or as an alternative you could also 
```javascript
// foobar.js
export bar = function(){
	console.log('Hello bar');
}
```
```javascript
// main.js
import * as foobar from 'foobar';
foobar.bar();
```

To Include a ES6 Module in your HTML-File use 
```HTML
<script src="index.js" type="module"></script>
```

## Classes

## Class Sample
```javascript
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
```javascript
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
