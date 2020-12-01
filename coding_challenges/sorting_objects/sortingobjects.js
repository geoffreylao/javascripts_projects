// Given an array of objects, sort the objects by population size
// Return the entire object
// Input: array of objects
// Output: array of objects sorted by population

console.log(sortObjects([1, 11, 27, 2, 34, 123]));

function sortObjects(arr){
    return arr.sort((a, b) => (a.population > b.population) ? 1 : -1);
}

// Not really sure what this is supposed to be doing??