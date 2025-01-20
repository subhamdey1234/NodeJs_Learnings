import fs from "fs"
import http from "http"

const server=http.createServer((req,res)=>{
    const {url,method}=req;
  
    if (method=="GET") {
        if (url==="/") {
            const data=fs.readFileSync("./pages/todo.html");
            res.end(data);
        }
        else if(url==="/tododata")
        {
            const data=fs.readFileSync("./pages/todo.json");
            res.end(data);
            
        }
        else{
            res.end("<h1>404 !! ERROR </h1>");
        }           
        

    }
   else if (method=="POST") {
        if (url==="/tododata") {
            console.log("todo data Posted");
            req.on('data', (data) => {
                const tododata = JSON.parse(data);
                console.log("Received Data:", tododata);
                let jsondata=JSON.stringify(tododata);
                storeUserData(JSON.parse(jsondata));
                res.end(JSON.stringify({ message: "Todo Data Received" }));
            });
            
        }
    }

    else if(method=="DELETE")
    {
        if (url==="/tododata") {
            req.on('data', (data) => {
                const tododata = JSON.parse(data);
                console.log("Received Data:", tododata);
                let jsondata=JSON.stringify(tododata);
                deletedata(JSON.parse(jsondata));
                res.end(JSON.stringify({ message: "Todo Data Received" }));
            });
        }
    }

})

server.listen(2000,"localhost",()=>{
    console.log("server started");
    
})


function storeUserData(task) {
    try {
        const todoData =  fs.readFileSync("./pages/todo.json");
        const tasks = JSON.parse(todoData);
        tasks.push(task);
        fs.writeFileSync("./pages/todo.json", JSON.stringify(tasks));
        console.log("Task added:", task);
      } catch (err) {
        console.error("Failed to store user data:", err.message);
        throw err;
      }
}


function deletedata(task) {
    try{

        const data=fs.readFileSync("./pages/todo.json");
        const tasks=[];
         tasks=JSON.parse(data);
        tasks.splice(task);
        fs.writeFileSync("./pages/todo.json",JSON.stringify(tasks));
        console.log("Task Deleted",task);

        



    }
    catch(err){
        console.error("Failed to store user data:", err.message);
throw err;        
    }
}