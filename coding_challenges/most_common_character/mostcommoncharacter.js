// Write a function that takes a string, and returns the character that is most commonly used in the string
// Input: String (one string)
// Output: String (the single character that shows up the most in the given string)
// Do not need to consider if there is no string given
// Return the last character in the case of a tie

console.log(mostCommonChar('aaadddsss'));

function mostCommonChar(str){
    let charCount = {}; // Define and Initialize an object
    let maxCharCount = 0;
    let maxChar = '';

    // Iterate through string and check to see if it exists in charCount
    // If it does add 1 to charCount[key] and reassign to the same variable
    // If key does not yet exist in object it's initialized to 1
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    for(let key in charCount) {
        if(charCount[key] >= maxCharCount){
            maxCharCount = charCount[key];
            maxChar = key;
        }
    }

    return maxChar;

}