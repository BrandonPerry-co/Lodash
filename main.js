// Load the full build.
const _ = require('lodash');

let array = [1,2,3,4,5,6];

let del = _.chunk(array);


let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`Array chunked: ${del}`);
console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);


var array1 = [1];
var other = _.concat(array1, 2, [3], [[4]]);

console.log(other);
console.log(array1);

let backwards = _.reverse(array)
console.log(backwards)

let wo = _.without([1,1,2,3,4,5,2,4,5],5,1)
console.log(wo)

let cupid = _.shuffle([1,1,2,3,4,5,2,4,5]);
console.log(cupid)
