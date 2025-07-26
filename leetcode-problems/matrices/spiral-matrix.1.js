const spiralOrder = (matrix) => {
	const result = [];
	const [rows, cols] = [matrix.length, matrix[0].length];
	let [rowBegin, rowEnd] = [0, rows - 1];
	let [colBegin, colEnd] = [0, cols - 1];
	const inBounds = () => result.length < rows * cols;

	while (result.length < rows * cols) {
		for (let col = colBegin; col <= colEnd && inBounds(); col += 1)
			result.push(matrix[rowBegin][col]);
		rowBegin += 1;
		for (let row = rowBegin; row <= rowEnd && inBounds(); row += 1)
			result.push(matrix[row][colEnd]);
		colEnd -= 1;
		for (let col = colEnd; col >= colBegin && inBounds(); col -= 1)
			result.push(matrix[rowEnd][col]);
		rowEnd -= 1;
		for (let row = rowEnd; row >= rowBegin && inBounds(); row -= 1)
			result.push(matrix[row][colBegin]);
		colBegin += 1;
	}

	return result;
};
