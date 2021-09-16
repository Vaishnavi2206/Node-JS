const express = require("express");
const app = express();

//middleware function.middleware should call another middleware unless we terminate the cycle and send back the data 
const logger=(request, response,next)=>{
    const method=request.method
    const url=request.url
    const date=new Date().getFullYear()
    console.log(method,url,date);
    next()
}

module.exports =logger