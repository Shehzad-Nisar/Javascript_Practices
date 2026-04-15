function outer() {
  // This variable is created inside outer function
  // Normally it should be destroyed after outer() finishes
  let count = 0;

  // inner function is defined inside outer function
  function inner() {
    // inner function "remembers" count from outer scope
    count++;

    // prints updated value of count
    console.log(count);
  }

  // outer function returns inner function
  // IMPORTANT: we are not calling inner(), we are returning it
  return inner;
}

// outer() runs and returns inner function
// fn now stores the inner function
const fn = outer();

// First call of inner function
// Even though outer() is finished, count is still remembered
fn(); // 1

// Second call
fn(); // 2