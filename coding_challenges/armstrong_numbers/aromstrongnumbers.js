// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.
// Determine if the input number is an armstrong number. Return either true or false
// Input: Number = n-digit number
// Output: Boolean
// Example: 1^3 + 5^3 + 3^3 = 153

console.log(checkArmstrong(153));
console.log(checkArmstrong(371));
console.log(checkArmstrong(372));

function checkArmstrong(number){
    number = number.toString();

    let check = 0;

    for (let i = 0; i < number.length; i++) {
        check += Math.pow(number[i],number.length);
    }

    return check.toString() === number;
}