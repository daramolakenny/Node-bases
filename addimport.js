import { dirname } from 'path';
import { fileURLToPath } from 'url';
import Math from './callimport.js'; //we can use anyname to import
import greety from './funct.js'; //first method
// import greet from './funct.js'; //second method

import path from 'path';

const __filename = fileURLToPath(import.meta.url);
console.log('filename', __filename);


const __dirname = dirname(__filename);
console.log('dirname', __dirname);

console.log(Math.sum(2, 4))

try {
    let result = Math.divide(0,2);
    console.log(result);
    
} catch (error) {
    console.log('caught and error:', error.message);
    
}
// console.log(Math.divide(20, 0));

console.log(Math.multiply(2,2));


console.log(greety.greet('kenny')); //firts method
// console.log(greet('kenny')); //second method

console.log("Directory:", path.dirname(__filename));
