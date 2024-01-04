console.log("Hello, World!");
const _ = require('lodash');

const myArray = [1, 2, 3, 4, 5];

//In this example, _.tail function is used to obtain all elements of the array except the first one
const elementsExceptFirst = _.tail(myArray);

console.log(elementsExceptFirst);