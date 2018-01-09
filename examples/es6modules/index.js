'use strict';
import Lib from './Lib.js';
var lib = new Lib();
lib.increase(99);
document.querySelectorAll('#number')[0].textContent = lib.increase(99);
