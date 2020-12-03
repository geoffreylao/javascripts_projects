// Given a string possibly containing three types of braces ({},[],()),
// write a function that returns a Boolean indicating whether the given
// string contains a valid nesting of braces
// Input: String
// Output:  Booelean
// A string is considered balanced if it has as many opening
// brackets of a given type as it has closing brackets of that same type
// All chars can be used

console.log(balancedBrackets("{}[]"));
console.log(balancedBrackets("(trab{)}"));

function balancedBrackets(str){
    const stack = []; // array to function as a stack
    let openBracket = ["{", "[", "("];
    let closeBracket = ["}", "]", ")"];

    const dict = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if(openBracket.includes(char)) { // if char is openBracket push it onto the stack
            stack.push(char);
        }else if(closeBracket.includes(char)){ // if char is closeBracket

            if(!stack.length){  // if stack is empty there was no openBracket
                return false;
            }else if(dict[stack.pop()] !== char) { // check corresponding bracket
                return false;
            }
        }
        
    }

    return stack.length === 0;
}
