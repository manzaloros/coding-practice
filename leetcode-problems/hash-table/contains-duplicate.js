/**
 * Can also do this with a map.
 *
 * Add values to a map and always check if a value is already in the map.
 *
 * Can also do it with sorting, where you sort and see if you've seen the
 * previous value
 */
const containsDuplicate = (nums) => {
	return new Set(nums).size !== nums.length;
};
