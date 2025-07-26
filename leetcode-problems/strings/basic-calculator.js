/**
 * Stack holds the sign. Push sign to the stack when open parens, pop when closed. When +, sign becomes the top of the stack. When -, sign is negative top of the stack.
 * 
 * When a number appears, multiply it by the sign and add it to the result.
 * 
 * To convert a string of digits to a number, get the digit by subtracting the 0 charCode from the string digit charCode. Then, multiply the existing number by 10 and add the digit to the parsed digit.
 */
const calculate = (s) => {
	const stack = [1]; // initialized with 1 sign in the stack. Stack only holds 1 or -1 (the sign).
	let result = 0;
	let sign = 1;
	const { length } = s;
	let i = 0;

	while (i < length) {
		const char = s[i];

		switch (char) {
			case " ": {
				i += 1;
				break;
			}
			case "+": {
				sign = stack[stack.length - 1]; // reassign sign to be the positive top of the stack
				i += 1;
				break;
			}
			case "-": {
				sign = -stack[stack.length - 1]; // sign is negative top of the stack
				i += 1;
				break;
			}
			case "(": {
				stack.push(sign);
				i += 1;
				break;
			}
			case ")": {
				stack.pop();
				i += 1;
                break;
			}
			default: {
				let num = 0;
				// s[i] is a number and is in bounds
				while (i < length && s[i] >= "0" && s[i] <= "9") {
					num = num * 10 + (s[i].charCodeAt() - "0".charCodeAt()); // convert string digit to number
					i += 1;
				}
				result += sign * num;
			}
		}
	}

	return result;
};

/* 
'2 + 1'

sign:1
stack:[1]
result: 3
 */

/* 
           i
'2 - (1 + 5)'

sign:-1
stack:[1]
result: -4
 */
