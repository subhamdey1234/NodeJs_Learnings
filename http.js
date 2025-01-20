const http=require('http');
const server=http.createServer(
    (req,res)=>{
                console.log("Server is getting the data request");
                console.log(req.method,req.url);
                if (req.method=='GET' && req.url==='/') {
                    res.write("Hello Friends....");
                    res.end();
                }
                else if (req.method=='GET' && req.url==='/about') {
                    res.end("<h1>This Is about Page</h1> <a href='/'>Home</a>");
                }
                else if (req.method=='GET' && req.url==='/contacts') {
                    res.end("<h1> This Is Contacts Page ..</h1> <a href='/'>Home</a>");
                }
                else if (req.method=='GET' && req.url==='/pricing') {
                    res.end("<h1>This Is a Pricing Page ...  </h1> <a href='/'>Home</a>");
                }
                
    }
);
 
server.listen(9000,"localhost",()=>{
    console.log("Server Started");
    
})