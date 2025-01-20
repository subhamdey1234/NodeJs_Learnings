

import fs from "fs";

//asyncronous operation
// fs.writeFile("./a.txt","hello world! my name is Subham Dey And I am Learning Node js","utf-8",(error)=>{
   // if (error) {
     //   console.log(error);
        
   // }
   // else{
    //    console.log("file created...");
        
  //  }
//});


//syncronous operation
// fs.writeFileSync("b.txt","creating a file in node","utf-8");

//fs.readFile("./a.txt","utf-8",(error,data)=>{
  //  if (error) {
    //    console.log(error);
        
   // }
   // else{
    //    console.log(data);
        
  //  }
//})

//async
//let res=fs.readFileSync("./b.txt","utf-8")
//console.log(res);


//asynchronous
fs.appendFile("./a.txt","Hello Jspiders...",(error)=>{
    if (error) {
        console.log(error);
        
    }
    else{
        console.log("File Updated");
        
    }
})
//synchronous
fs.appendFileSync("./b.txt"," new text updated....");



//-----------Delete file-----------------//
//async
fs.unlink("./a.txt",(error)=>{
    if (error) {
        console.log(error);
        
    }
    else{
        console.log("file deleted");
        
    }
})

//sync

fs.unlinkSync("./a.txt");
fs.rename("./b.txt","data.txt",(error)=>{
    if (error) {
        console.log(error);
        
    }
    else{
        console.log("Rename Of file is Successfull");
        
    }
})
