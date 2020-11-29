// Create a function that takes in two strings as two parameters and returns a boolean that indicates
// whether or not the first string is an anagram of the second string
// Input: String, String
// Output: Boolean
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase
// Trim whitespace prior to comparison

console.log(anagramCheck("ads", "sad"));
console.log(anagramCheck("nope", "nah"));

function anagramCheck(str1,str2){
    if(str2.length != str2.length){
        return false;
    }else{
        str1 = str1.split('');
        str1 = str1.sort();
        str1 = str1.join('');
        str1.lowercase;

        str2 = str2.split('');
        str2 = str2.sort();
        str2 = str2.join('');
        str2.lowercase;

        if(str1 == str2){
            return true;
        }else{
            return false;
        }
    }
}