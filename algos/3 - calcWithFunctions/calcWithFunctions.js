/*
 Exercice: Calculating with Functions
  This time we want to write calculations using functions and get the results. Let's have a look at some examples:
    -> seven(times(five())); // must return 35
    -> four(plus(nine())); // must return 13
    -> eight(minus(three())); // must return 5
    -> six(dividedBy(two())); // must return 3

  Requirements:
  There must be a function for each number from 0 ("zero") to 9 ("nine")
  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
  Each calculation consist of exactly one operation and two numbers
  The most outer function represents the left operand, the most inner function represents the right operand
  Division should be integer division. For example, this should return 2, not 2.666666...:
*/

/* 
  If you need more functions, feel free to implement them as well but keep in mind that the tests will only cover those built in functions. So make sure that your function are called
  by those ones and do not return actual results. 
*/
module.exports = {
  zero() {},
  one() {},
  two() {},
  three() {},
  four() {},
  five() {},
  six() {},
  seven() {},
  eight() {},
  nine() {},
  plus() {},
  minus() {},
  times() {},
  dividedBy() {}
}