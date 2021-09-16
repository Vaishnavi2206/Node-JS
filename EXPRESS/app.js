const express = require("express");
const app = express();
const logger=require("./logger")
const authorize=require("./authorize")

// app.use('/api',logger)
// app.use([authorize,logger])

app.get('/',(request, response)=>{
    response.send("home")
})

app.get('/about',(request, response)=>{
    response.send("about")
})

app.get('/api/products',[authorize,logger],(request, response)=>{
    console.log(request.user);
    response.send("products")
})

app.listen(5000, () => {
  // console.log("hey");
});
