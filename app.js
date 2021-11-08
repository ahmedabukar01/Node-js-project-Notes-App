
// const fs = require('fs') 
// fs.writeFileSync('notes.txt','this file was created by node js !');
// fs.appendFileSync('notes.txt','this text appended from appendFileSync.');

// const fs = require('fs') 
// fs.writeFileSync('notes.txt','this file was created by node js !');
// fs.appendFileSync('notes.txt','this text appended from appendFileSync.');

const name = require('./utils');
const getNotes = require('./notes')

name('hey node js world here i am :)');
console.log(getNotes());