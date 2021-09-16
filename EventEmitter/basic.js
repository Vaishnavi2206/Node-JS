const EventEmitter =require('events') //its a class     

//on and emit. on property is used to bind a function with the event and emit is used to fire an event.
customEmitter=new EventEmitter()
 
customEmitter.on('response',(name,rollno)=>{
    console.log(`data received ${name} ${rollno}`); //op only when event is triggered
})

customEmitter.emit('response','john',23)