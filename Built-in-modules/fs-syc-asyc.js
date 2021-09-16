
const getTacos=(flag)=>{
return new Promise((resolve, reject)=>{
    if(flag===true){
        resolve("Bringing tacos...")
    }else{
        reject("Failed to bring tacos...")
    }
})
}

const onFulfillment=(result)=>{
    console.log(result)
    console.log("Set up the table for dinner");
}

const onRejection=(error)=>{
    console.log(error)
    console.log("Start cooking pasta");
}


getTacos(false).then(onFulfillment).catch(onRejection)

