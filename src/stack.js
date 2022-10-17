const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element ) {
   let result = [];
   result.push(element)
    // remove line with error and write your code here
  }

  pop() {
    while(Stack.length){
      Stack.pop();
    }
    // remove line with error and write your code here
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    Stack.peek();
  }
}

module.exports = {
  Stack
};
