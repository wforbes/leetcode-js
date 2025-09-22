// last problem worked
import removeDuplicates from './problems/0026_remove_duplicates.js'

let test0 = [0, 1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 8, 8, 8, 9]
let result = removeDuplicates(test0)
console.log(result)

let test1 = [1, 1, 2];
result = removeDuplicates(test1)
console.log(result)

let test2 = [1, 1];
result = removeDuplicates(test2)
console.log(result)