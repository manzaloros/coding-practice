/**
 * @param {number[]} nums
 * @return {string}

 o: string, rep. type of triangle or "none"
 i: number[] size 3
 c:
 e:

 sum of any two sides need to be greater than third side

 121

 Can also sort to make the hard coding less confusing.
 */

 // O(1) time and space
const triangleType = (nums) => {
    const iso = "isosceles";
    const sca = "scalene"
    const equi = "equilateral"
    const none = "none";

    const [one, two, three] = nums;
    

    // NOTE! If you sort the array, you can just check that one + two is > three:
    // determine if its a triangle
     if ((one + two) > three && (two + three) > one && (one + three) > two) {
        if (one === two && two === three) return equi;

        if (one === two || two === three || one === three) return iso;

        return sca;   
     }
     
     return "none";
}