const authorize=(request, response,next) => {
    const {user}=request.query
    if(user==='joe'){
        request.user={name:'joe',id:3}
    }else{
        return response.status(401).send("Unauthorized")
    }
    next()
}

module.exports=authorize