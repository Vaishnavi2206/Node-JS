const http=require('http')

const server=http.createServer(function(req, res){

    if(req.url==='/'){

        res.write(`<h1>Home page</h1>`)
        res.end()
    }
    if(req.url==='/about'){

        res.write(`<h1>about page</h1>`)
        res.end()
    }

    res.end(`<h1>404!page not found</h1>`)
})

server.listen(5000)