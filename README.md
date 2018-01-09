# JS Cheat Sheet
Summary of code snippets arround modern JS, ES6, etc., as well as a couple of interesting resource links.

## Overview
- [Misc](#misc)
- [ES6 Basics](#es6-basics)
- [Maps](#maps)
- [Classes](#classes)
- [Modules](#modules)
- [Promises](#promises)

## Misc

### JavaScript Versions

- **ES5** standardized in 2009, widely supported.
- **ES6 / ECMAScript 2015** standardized in 2015. [Most modern browsers support it](http://kangax.github.io/compat-table/es6/)
- **ES7 / ECMAScript 2016** is a smaller release from 2016. `Array.prototype.includes` will obsolete the old function `Array.prototype.contains`. There is also a new exponent operator (2^3 == `2 ** 3`)
- **ES8 / ECMAScript 2017** includes features like String Padding, `Object.values` and `Object.entries`, **Async functions**, Trailing Commas**,**
- **ES9** will mostly lift template literal restrictions

### Resources
References, useful and interesting links.

**Resources**
- [ES6 Features](http://es6-features.org/#Constants)
- [New Features in ES8 and ES9](https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66)
- [Modern JS Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet) by mbeaudru
- [ES6 Cheatsheet by DrkSephy](https://github.com/DrkSephy/es6-cheatsheet)

**Interesting Links**
- [Can I use](https://caniuse.com) - JS / CSS Browser Support
- [30 Seconds of Code](https://github.com/Chalarangelo/30-seconds-of-code) - JS Snippets explained in 30 seconds
- [Frontend Dev Resources](https://github.com/dmytroyarmak/frontend-dev-resources) - tons of Ressources (Conferences, Courses, Newsletter, etc.)
- [You Don't Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery)
- [Babel Online Transpiler](https://babeljs.io/repl/)


## ES6 Basics

### Introduction
To make sure your audience can use the code you still might want to use [Babel](https://babeljs.io) to transpile your modern JS.
Make sure to check your sites features with [Can I use](https://caniuse.com) and the [ES6 Compat Table](http://kangax.github.io/compat-table/es6/)

### Use Strict
Was actually part of ES5, to tell the browser to run in `strict mode`.
It is always block scoped, declared of the beginning of a file it has a global scope. But it always needs to be declared at the beginning of a block / function / file.

- Helps to write *secure* JS
- Prevents bad Syntax
- You cannot use undeclared variables in strict mode for example.
- ...

```javascript
'use strict';
...
```

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

Immediatly Invoked Arrow Function need to be put in brackets

```javascript
(() => {
  console.log('Do it now!');
})()
```

### Blocks
To replace immediatly invoked functions. *See also immediatly invoked arrow functions.*
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
[ES6 String Interpolation / Template Literals Browser Support](https://caniuse.com/#feat=template-literals)
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
## Classes

[ES6 Classes Browser Support](https://caniuse.com/#feat=es6-class)
[Currently it is not possible](https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes) to have private variables in a class.

### Sample
```javascript
class CheatSheet{
	constructor(lang, text){
		this.lang = lang; // Declare Public Variable
		this.text = text;
	}
	print(){
		console.log(`# ${this.lang}
			${this.text}`);
	}
	changeLanguage(l){
		this.lang = l;
	}
}

class PetersCheatSheet extends CheatSheet{

}
var myCS = new PetersCheatSheet("JavaScript", "Here will be some text for JS");
myCS.print();
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
Check out the [full working sample](https://github.com/xremix/JS-Cheatsheet/tree/master/examples/es6modules)

```javascript
// Lib.js
class Lib {
	increase(n) {
		console.log(n);
        return ++n;
    }
}
export default Lib;
```

```javascript
// main.js
import Lib from './Lib.js';
var lib = new Lib();
lib.increase(99);
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


## Promises
ES6 Promise pattern, so there is no need anymore to use [q](https://github.com/kriskowal/q), but be aware of [no IE11 support](https://caniuse.com/#feat=promises)
To have browser support for IE11 and older browsers make sure to [polyfill Promises](https://github.com/stefanpenner/es6-promise)

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


![Analytics](https://ga-beacon.appspot.com/UA-40522413-9/JS-Cheatsheet/readme?pixel)