//es6 node compute factorial module
/**
* @author Jeff Fulton
/*
*/
/*In mathematics, the factorial of a positive integer n,[1] denoted by n!, 
* is the product of all positive integers less than or equal to n. 
* There are two methods. Recursion is the classic method
* Code Complete says that recursion is a improper method
* Secomnd version is the code complete interation version
*/

'use strict';

module.exports = function(integer, recursion=true) {
    var factorial = 0;
    var integer=integer;
    if (recursion) {
        console.log("recursion with: ", integer)
        factorial=computeFactorialRecursive(integer);
    }else{
        console.log("loop with: ", integer)
        factorial=computeFactorialLoop(integer);
    }

    return factorial;

    function computeFactorialRecursive(num) {
        if (num <= 1) {
				return(1);
			}else {
				return (num * computeFactorialRecursive(num - 1));
			}
    }

    function computeFactorialLoop(num) {
        var result = 1;
            
            // start at 2 through num
			for (var factor = 2; factor <= num; factor++) {
				result = result * factor;
			}
			
			return result;
    }

}
