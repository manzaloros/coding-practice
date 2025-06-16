/**
 * Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.
 * 
 * Time: O(number of digits)
 * Space: O(number of digits)
 * 
 * Scanning left to right:
 * Find the max number by remapping the first non-nine number to a 9.
 * 
 * Find the min number by remapping the first digit to a 0, since we know that digit
 * can't be a zero.
 * 
 * Then, subtract them
 */
const minMaxDifference = (num) => {
    const digits = String(num).split('');


    const firstNonNineIdx = digits.findIndex(d => d !== '9');
    const firstNonNineNum = digits[firstNonNineIdx];
    const max = Number(digits.map(d => {
        if (d === firstNonNineNum) {
            return '9'
        }
        return d;
    }).join(''))
    const firstDigit = digits[0];
    const min = Number(digits.map(d => {
        if (d === firstDigit) {
            return '0';
        }
        return d
    }).join(''))

    return max - min;
};