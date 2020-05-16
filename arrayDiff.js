//the big takeaway here:
//splice(index to be removed, how many elements to review)
//you can compensate for the index skipped by decrementing i when you splice the original array

function arrayDiff(a,b) {
  //create output array
  let output = [];
  //create index
  //iterate over a
  for (let i = 0; i < a.length; i++) {
    for (let j= 0; j< b.length; j++) {
      //if item in b matches item in a 
      console.log(a[i], b[j]);
      if (b[j] === a[i]) {
        //reassign a to remove that value
        a.splice(i, 1);
        i--;
      }
    }
  }
  //return output
  return a;
}

let inputActual = arrayDiff([20,1,10,20,10,13,-19,16,17,20,-2,10,5,13,5,14,11,8,6],[-2,5,13,6,14,10,16,20,1]);
let inputExpected = [-19, 17, 11, 8];
console.log(inputActual);
 
//splice returns an element, not an array

