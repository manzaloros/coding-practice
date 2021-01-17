function stockList(listOfArt, listOfCat) {
  let listOfBooks = "";
  let listOfBooksObject = {};
  for (let i = 0; i< listOfArt.length; i++) {
    let currentBook = listOfArt[i][0];
    let bookCount = parseInt(listOfArt[i].split(" ")[1]);
    //if key exists in books object
    if (listOfBooksObject[currentBook]) {
      //update value with new number
      listOfBooksObject[currentBook] += bookCount;
    } else {
    //else 
      //create key and value of books
      listOfBooksObject[currentBook] = bookCount;
    }
  }
  for (let i = 0; i < listOfCat.length; i++){
    let currentCat = listOfCat[i]
    if (listOfBooksObject[currentCat]) {
      listOfBooks += `(${currentCat} : ${listOfBooksObject[currentCat]}) - `;
    } else {
      listOfBooks += `(${currentCat} : 0) - `;
    }
  }
  return listOfBooks.slice(0, -3);
}



//populate object with book numbers
//if there are any doubles, add those numbers together
//loop over category array
  //asking for the number of books,
//create the formatted string

function assertEquals(actual, expected) {
	if (actual === expected) {
		console.log(`passed`);
	} else  {
		console.log(`failed, Expected ${expected}, but got ${actual}`);
	}
}

let inputActual = stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]);
let inputExpected = "(A : 20) - (B : 114) - (C : 50) - (W : 0)";
assertEquals(inputActual, inputExpected);