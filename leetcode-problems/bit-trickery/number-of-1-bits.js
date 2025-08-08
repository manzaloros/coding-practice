/**
 * Example:
 * 
 *         Least significant 1
 *              |_
 * n     : 1 1 0 1 0 0
 * n - 1 : 1 1 0 0 1 1
 *               |
 *               The least significant 1 place in n - 1 is always a 0.
 * 
 * So if you do n & (n - 1), you'll get
 * 
 *              was the least significant 1 place.
 *               |
 *         1 1 0 0 0 0
 * 
 * 
 * So, while your number (n) isn't 0,
 * 
 *  do n & (n - 1), which flips the least significant 1 to a zero, and increment count.
 * 
 * Then return your count, which represents the number of times you flipped the least significant
 * bit to 0.
 */
const hammingWeight = (n) => {
	let count;
	// Each loop, this flips the least significant 1 to a 0. Keep doing that until
	// n is 0. The number of times you had to do it is the number of 1s in the number.
	for (count = 0; n !== 0; count += 1) n &= n - 1;
	return count;
};

/**
 * Init a bit mask of 1: 0001
 * Looping 0 to 32
 *   do an & of the mask and the number. Will give you the least significant bit of the number.
 *     If that is not 0, increment bits because we found a bit.
 * 
 *   Left shift the mask by 1, e.g. 0001 would become 0010.
 * 
 * Finally, return the number of bits we found.
 */
var hammingWeightLoop32Times = (n) => {
	/**
    init bits as 0
    init mask as 1

    while i < 32
        if n & mask is not zero
          increment bits
        mask === mask << 1



    return bits
     */
	let bits = 0;
	let mask = 1;

	for (let i = 0; i < 32; i += 1) {
		if ((n & mask) !== 0) bits += 1;
		mask = mask << 1;
	}
	return bits;
};
