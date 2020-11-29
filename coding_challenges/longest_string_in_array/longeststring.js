// Write a function that accepts an array of strings. Return the longest string
// Input: String[]
// Output: String
// Does not consider if there are no strings in the array
// Return first string if strings are the same length

let string_arr = ["bruh", "grimpo", "auabos"];

console.log(findLongestString(string_arr));

function findLongestString(arr) {
    let longest = ""; // Initialize and Declare Variable for Longest string
    
    for (let i = 0; i < string_arr.length; i++) { // Loop through the array

        if(string_arr[i].length > longest.length){ // Find the length of each string. Determine if that length is the largest we have seen so far
            longest = string_arr[i]; // Replace the longest/largest variable with the arr[index] as long as length is greater than the variable
        }
    }
    return longest; // Return longest/largest string
}

