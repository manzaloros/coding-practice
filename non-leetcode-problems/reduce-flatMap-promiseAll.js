export const flatMap = (array, callback) => {
	const result = [];
	for (const el of array) {
		const value = callback(el);
		if (Array.isArray(value)) {
			result.push(...value);
		} else result.push(value);
	}
	return result;
};

export const reduce = (array, callback, initialValue) => {
	if (array.length === 0 && initialValue === undefined) {
		throw new TypeError("Reduce of empty array with no initial value");
	}

	let acc;
	let i;
	if (initialValue !== undefined) {
		acc = initialValue;
		i = 0;
	} else {
		acc = array[0];
		i = 1;
	}
	for (; i < array.length; i += 1) {
		acc = callback(acc, array[i]);
	}

	return acc;
};

/**
 * Secret is to keep track of the number of completed promises, and if they're
 * all done, resolve the result array. This all happens within the one returned
 * Promise.
 */
export const promiseAll = (promises) => {
	return new Promise((res, rej) => {
		const results = [];
		let completed = 0;
		const { length } = promises;
		if (length === 0) return res([]);

		for (let i = 0; i < length; i += 1) {
			Promise.resolve(promises[i]) // makes non promises into promises
				.then((value) => {
					results[i] = value;
					completed += 1;
					if (completed === length) {
						res(results);
					}
				})
				.catch(rej);
		}
	});
};

const mockP = (v) => {
	return new Promise((res) => {
		setTimeout(() => {
			res(v);
		}, 1000 * Math.random());
	});
};

const p1 = mockP({ value: [1, 2, 3] });
const p2 = mockP({ value: [4, 5, 6] });
const resolved = await promiseAll([p1, p2]);
console.log("before promise");
console.log({ resolved });
const flattened = flatMap(resolved, (el) => el.value);
console.log({ flattened });
const reduced = reduce(flattened, (acc, curr) => curr + acc);
console.log({ reduced }, reduced === 21);

console.log(await promiseAll([])); // []
console.log(flatMap([], (v) => v.value)); // []
console.log(flatMap(undefined, (v) => v.value)); // []
