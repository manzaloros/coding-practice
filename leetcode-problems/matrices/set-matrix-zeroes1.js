/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// O(m + n) space
const setZeroes = (matrix) => {
	const rowSet = new Set();
	const colSet = new Set();

	const recordRowsAndCols = (el, row, col) => {
		if (el === 0) {
			rowSet.add(row);
			colSet.add(col);
		}
	};

	const updateMatrix = (el, row, col) => {
		if (rowSet.has(row) || colSet.has(col)) {
			matrix[row][col] = 0;
		}
	};

	const iterate = (cb) => {
		matrix.forEach((row, rowIndex) => {
			row.forEach((el, colIndex) => {
				cb(el, rowIndex, colIndex);
			});
		});
	};

	// record rows and cols that are 0s
	iterate(recordRowsAndCols);

	// update matrix
	iterate(updateMatrix);
};

// Optimal way to do this:
const setZeroesO1 = (matrix) => {
	// check if first row / first col is 0 and set variable for it
	let isFirstColZero = false;

	const markCells = (el, row, col) => {
		if (col === 0 && el === 0) isFirstColZero = true;

		// Don't mark 0th col!
		if (col >= 1) {
			if (el === 0) {
				matrix[0][col] = 0; // mark row 0 with that col as 0
				matrix[row][0] = 0; // mark col 0 with that row as 0
			}
		}
	};

	const needsZero = (row, col) =>
		row >= 1 && col >= 1 && (matrix[row][0] === 0 || matrix[0][col] === 0);

	const updateMatrix = (el, row, col) => {
		if (needsZero(row, col)) {
			matrix[row][col] = 0;
		}
	};

	const setFirstRowZero = (el, row, col) => {
		if (row === 0) matrix[row][col] = 0;
	};

	const setFirstColZero = (el, row, col) => {
		if (col === 0) matrix[row][col] = 0;
	};

	const iterate = (cb) => {
		matrix.forEach((row, rowIndex) => {
			row.forEach((el, colIndex) => {
				cb(el, rowIndex, colIndex);
			});
		});
	};

	// iterate and mark first row/col of 0 cells that you see
	iterate(markCells);

	// iterate from row 1 col 1 onwards. if row 0 or col 0 has been set as 0, set
	// that cell to 0
	iterate(updateMatrix);

	const isFirstRowZero = matrix[0][0] === 0;

	if (isFirstRowZero) iterate(setFirstRowZero);
	if (isFirstColZero) iterate(setFirstColZero);
};

// setZeroesO1([[0, 1, 1], [1, 0, 1], [1, 1, 1]]);
// setZeroesO1([[1, 0, 3]]);
// setZeroesO1([[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]]);
setZeroesO1([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
]);
