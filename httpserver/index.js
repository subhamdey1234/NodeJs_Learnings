import http from "http"
import fs from "fs"
const server =http.createServer((req,res)=>{
const {url,method}=req;
if (method=='GET') {
    if (url==='/') {
        let data=fs.readFileSync("./pages/index.html");
                res.end(data);
    }
    else if (url=='/about') {
       let data=fs.readFileSync("./pages/about.html");
       res.end(data);
    }
    else if (url=='/login') {
        let data=fs.readFileSync("./pages/login.html");
        res.end(data);
    }
    else if(url=='/contact')
    {
let data=fs.readFileSync("./pages/contact.html");
res.end(data);
    }
    else if (url=='/pricing') {
        let data=fs.readFileSync("./pages/pricing.html");
        res.end(data);
    }
    else if(url=='/downloads')
    {
 let data=fs.readFileSync("./pages/downloads.html");
 res.end(data);
    }
    else if(url=='/css/index.css')
    {
       let data=fs.readFileSync("./css/index.css");
       res.end(data);
    }

   
    else{
        res.end("<h1 align='center' style='color:red'>404!! Page Not Found</h1>")
    }
}
});


server.listen(2000,"localhost",()=>{
    console.log("Server Started");
    
})