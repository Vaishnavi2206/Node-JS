/*deals with files*/    

// const files=require('fs')
const {readFileSync,writeFileSync} = require('fs') //alternate way

console.log("start");

//reads file content.throws error if file does not exist
const firstFile=readFileSync('../content/file.txt','utf-8');
const secondFile=readFileSync('../content/second.txt','utf-8');
console.log(firstFile);
console.log(secondFile);

//creates a new file if not exists,alters content if already does
writeFileSync('../content/newfile.txt',`content from first and second file:${firstFile} ${secondFile} `);  

//appending content to existing file.set flag to 'a'
writeFileSync('../content/newfile.txt',`appending content....`,{flag:'a'});  

console.log("done");