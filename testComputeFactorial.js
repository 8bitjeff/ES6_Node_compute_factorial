/*
**usage**
var computeFactorial=require('./computeFactorial.js');
var result=computeFactorial(integer); 
*/
'use strict';

var factorialToCompute = 3;

console.log("factorialToCompute", factorialToCompute)

// calling a procedure like this in node will block io
var computeFactorial=require('./computeFactorial.js');
var result=computeFactorial(factorialToCompute, true); 

console.log ("result=", result);