import http from "http"
import fs, { readFileSync } from "fs"
import { json } from "stream/consumers";

const server =http.createServer((req,res)=>{
    const {url,method}=req
  if (method=="GET") {
    if (url=="/") {
        const data=readFileSync("./pages/home.html");
        res.end(data);
    }
    else if (url=="/about") {
         const data=readFileSync("./pages/about.html");
  res.end(data);
    }
    else if(url=='/css/navbar.css')
       {
          let data=fs.readFileSync("./css/navbar.css");
          res.end(data);
       }
       else if(url=='/getdata')
       {
        let user={name:"Ramesh",age:24,address:"Hyderbad"}
        res.end(JSON.stringify(user));
 
       }
       else if(url==="/login")
       {
           let data=fs.readFileSync("./pages/login.html");
           res.end(data);
       }
        
       else if(url==="/register")
       {
      let data=fs.readFileSync("./pages/register.html");
      res.end(data);
       }

       else{
        res.end("<h1>Page Not Found</h1>");
       }

  }


  else if(method=='POST')
   {
     if (url==='/sendData') {
       
      //collecting the data from request object by adding a listner...
      req.on("data",(data)=>{
         const student=JSON.parse(data.toString());
         console.log(student);
        res.end(JSON.stringify({message:"Data recieved"}));
         

      })
        
     }
    else if (url === '/registerformdata') {
      console.log("form Data Posted");
      req.on('data', (data) => {
          const formData = JSON.parse(data);
          console.log("Received Data:", formData);
          let jsondata=JSON.stringify(formData);
          storeUserData(JSON.parse(jsondata));
          res.end(JSON.stringify({ message: "Form Data Received" }));
      });
  }
  else if (url==='/logindata') {
    console.log("Loginform Data Posted");
    req.on('data',(data)=>{
      const logindata=JSON.parse(data.toString());
      console.log("Login Data Recieved:",logindata);
    
      res.end(JSON.stringify({message:"Login Form Data Recieved Successfully"}));
      
    })
    
  }

  else{
   res.end("<h1>404 error</h1>")
  }
   }


})
 server.listen(5000,"localhost",()=>{
    console.log("Server Started");
    
 })


  function storeUserData(user) {
  try {
    const usersData =  fs.readFileSync("./pages/user.json");
    const users = JSON.parse(usersData);
    users.push(user);
    fs.writeFileSync("./pages/user.json", JSON.stringify(users));
    console.log("User added:", user);
  } catch (err) {
    console.error("Failed to store user data:", err.message);
    throw err;
  }
}

