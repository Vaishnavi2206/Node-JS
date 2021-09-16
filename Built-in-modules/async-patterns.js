
const {readFile,writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

console.log("start")

//wrapper function
// const getText =(path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf-8',(error,result)=>{
//             if (error) {

//                 reject(error)
//             }
//             else{
//                 resolve(result)
//             }
//         })
//     })
// }

const start=async()=>{
    try{
        const first=await readFilePromise('../content/file.txt','utf-8')
        const second=await readFilePromise('../content/second.txt','utf-8')

        //creates if does not exists
        await writeFilePromise('../content/newresult.txt',`append file 1 and second.txt ${first} ${second}`)
        console.log(first, second);
    }catch(error){
        console.log(error);
    }
}

start()
// getText('./content/file.txt').then(result=>console.log(result)).catch(err=>console.log(err))

//appending two files

console.log('end')
