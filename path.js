import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

console.log("Directory:", path.dirname(__filename));
console.log("Filename:", path.basename(__filename));
console.log("Extention:", path.extname(__filename));

const joinPath =path.join('/Client', 'document', 'join');
console.log("Joined Path:", joinPath);

const resolve = path.resolve('Client', 'document', 'join');
console.log('Resolved Path:', resolve);

const nomalize = path.normalize('/Client/.document/../join');
console.log("Nomalized path:", nomalize);

import fs from 'fs';

// "sync way of creating file"
const dataFolder = path.join(__dirname, 'data');
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("folder created successfully");
}

// "sync way of creating file"
const filepath = path.join(dataFolder, example.js);
fs.writeFileSync(filepath, "Hello from kenny");
console.log("file created successfully");

// "sync way of reading file content"
const reading = fs.readFileSync(filepath, "utf-8");
console.log("File content", reading);


// for path folder