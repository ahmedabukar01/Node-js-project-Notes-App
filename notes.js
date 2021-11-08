const fs = require('fs') 
fs.writeFileSync('notes.txt','this file was created by node js !');
fs.appendFileSync('notes.txt','this text appended from appendFileSync.');