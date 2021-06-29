let a = 0;
let b = 0;

function makeIncrementer() {
  let c = 0;
  a += 1;
  return () => {
    b += 1;
    c += 1;
    return c;
  };
}

// First-Class functions: Describes the ability to store the function returned
// by makeIncrementer. Creates new execution context where c=0
const myIncrementerX = makeIncrementer();
// These two invocations happen within the execution context created previously
// and do NOT reset the value of c. They increment the value of c.
myIncrementerX();
myIncrementerX();

// Creates new execution context where c=0
const myIncrementerY = makeIncrementer();
myIncrementerY();
myIncrementerY();
myIncrementerY();

// returns c after incrementing it
const result1 = myIncrementerX();
const result2 = myIncrementerY();
const result3 = a;
const result4 = b;
