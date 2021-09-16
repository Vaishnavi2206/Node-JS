const path=require('path')

console.log(path.sep) //platform specific separator

const filePath = path.join('content','subcontent','text.txt')
console.log(filePath);

const base=path.basename(filePath) //last portion of a file path
console.log(base); 

const absolutePath = path.resolve(__dirname, filePath)
console.log("absoulte path is:",absolutePath);

console.log(path.dirname('../content/file.txt'));

console.log(path.relative(__dirname,'../content/file.txt'));