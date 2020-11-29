//bubble sort
// Should eventually make a sorting algo practice folder

function bubbleSort(array) {
	let length = array.length;
	for (let i = 0; i < length; i++) {
		//iterates over each element
		//only loops if j is less than i subtracted from the total length
		//basically won't loop if i is the last index (3)
		for (let j = 0; j < (length - i - 1); j++) {
			//checks the adjacent element if its smaller than the current
			if (array[j] > array[j + 1]) {
				//hold first element temporarily
				let tmp = array[j];
				//set first element equal to second
				array[j] = array[j + 1];
				//set second element equal to the temporary variablwe
				array[j + 1] = tmp;
			}
		}
	}
	return array;
}

let example = [7, 3, 5, 0, 9, 1];
console.log(bubbleSort(example));