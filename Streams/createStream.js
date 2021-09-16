const {createReadStream}=require('fs')

// const stream = createReadStream('./content/bigFile.txt')
const stream = createReadStream('./content/bigFile.txt',{highWaterMark:15000})

stream.on('data',(result)=>{
    console.log(result);
})