var http=require('http')
var fs=require('fs')

http.createServer((resquest,response)=>{
    // const text=fs.readFileSync('./content/bigFile.txt','utf-8')
    // response.write(text)
    const fileStream=fs.createReadStream('./content/bigFile.txt','utf-8')

    fileStream.on('open',()=>{
        fileStream.pipe(response)
    })

    fileStream.on('error',(error)=>{
        response.end(error)
    })

}).listen(5000)