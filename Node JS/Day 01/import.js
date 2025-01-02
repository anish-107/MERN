// import exporting from './export.js';

const exports = require('./export');

console.log(exporting.add(1, 2));
console.log(exporting.subtract(1, 2));
console.log(exporting.multiply(1, 2));

try {
    console.log("trying to divide");
    console.log(exporting.divide(1, 0));
    console.log("Divide successful");

}
catch (error) {
    console.log("Error : ", error.message);
}



