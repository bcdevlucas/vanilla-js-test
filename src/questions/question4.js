/**
 * How would you use a 'closure' to create a *private* counter?
 * Hint: It should error if we try to access the private variable like this: _counter;
 * We should be able to use the counter like this:
 * const c = counter();
 * c.add(5);
 * c.add(9);
 * c.retrieve();
 *
 */
export function question4() {
  function counter() {}
  // Sample usage of our counter function
  // const c = counter();
  // c.add(5);
  // c.add(9);

  return `The answer to question 4...
    eg. ${JSON.stringify("myanswer")}
  `;
}
