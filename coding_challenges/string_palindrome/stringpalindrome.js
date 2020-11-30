// Given a string, write a function that will return whether or not that string
// is a palindrome
// Input: String
// Output: Boolean
// Do not trim whitespace
// Palindrome does not need to be in the dictionary

console.log(checkPalindrome("racecar"));

function checkPalindrome(str){
    strArr = str.split(''); // Split string into array
    strArr = strArr.reverse(); // Reverse the string
    strArr = strArr.join(''); // Join the string

    if(str === strArr){ // Check new variation to
        return true;
    }else{
        return false;
    }
}