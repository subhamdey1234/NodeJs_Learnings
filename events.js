import events from 'events';

const eventEmitter=new events.EventEmitter()

eventEmitter.on("print",()=>{
    console.log("This is Printing Event");
    
})
eventEmitter.addListener("msg",()=>{
    console.log("the messaging Event");
    
})
//invoke
  //  eventEmitter.emit("print");
    //eventEmitter.emit("msg");


eventEmitter.removeAllListeners("print");
eventEmitter.emit("print");
