const http=require('http')
const {readFileSync} = require('fs')

const homePage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/styles.css')
const homeJS=readFileSync('./navbar-app/browser-app.js')
const homeImage=readFileSync('./navbar-app/logo.svg')

const server=http.createServer((request,response)=>{
    const url=request.url;
    console.log(url);
    if(url==='/'){
        response.writeHead(200,{"content-type":"text/html"}) //metadata about data
        response.write(homePage) //writes contents of file
        // console.log(request.method);
        response.end()
    }
    else if(url==='/about'){
      response.writeHead(200,{"content-type":"text/html"}) //metadata about data
        response.write(`<h1>About page</h1>`) //writes contents of file
        response.end()  
    }
    else if(url==='/styles.css'){
        response.writeHead(200,{"content-type":"text/css"}) //metadata about data
          response.write(homeStyles) //writes contents of file
          response.end()  
      }

      else if(url==='/browser-app.js'){
        response.writeHead(200,{"content-type":"text/javascript"}) //metadata about data
          response.write(homeJS) //writes contents of file
          response.end()  
      }
      else if(url==='/logo.svg'){
        response.writeHead(200,{"content-type":"image/svg+xml"}) //metadata about data
          response.write(homeImage) //writes contents of file
          response.end()  
      }
    else{
        response.writeHead(404,{"content-type":"text/html"}) //metadata about data
        response.write(`<h1>Page not found</h1>`) //writes contents of file
        response.end() 
    }
})

server.listen(5000)