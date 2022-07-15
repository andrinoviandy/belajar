// Core Module
// File Sistem
const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World Secara synchronous');    
// } catch (e) {
//     console.log(e);
// }

// menuliskan string ke file (Asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asycnh', (e) => { console.log(e) });

// membaca isi file Synch
// const file = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(file);
// const file = fs.readFileSync('data/test.txt');
// console.log(file.toString());

// membaca isi file Asynch
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});