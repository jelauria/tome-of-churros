const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created ....');
// });

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hellow.txt'), 'Hello world!!',
// err => {
//     if (err) throw err;
//     console.log('File written to...');

//     //callback 

//     fs.appendFile(path.join(__dirname, '/test', 'hellow.txt'), 'I <3 churros',
// err => {
//     if (err) throw err;
//     console.log('File written to...');
// });
// });

//read file
fs.readFile(path.join(__dirname, '/test', 'hellow.txt'), 'utf8',
(err, data) => {
    if (err) throw err;
    console.log(data);
});

// rename file
fs.rename(path.join(__dirname, '/test', 'hellow.txt'), path.join(__dirname, '/test', 'helloWorld.txt'),
err => {
    if (err) throw err;
    console.log('File renamed...');
});
