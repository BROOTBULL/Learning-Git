import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

let user=false;

function passwardcheck(req,res,next)
{
    const pass=req.body["password"];
    if(pass==="2611000")
    {
        user=true;
    }
    next();
}
app.use(passwardcheck);

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/public/index.html");
});

app.post("/check",(req,res)=>{
    if(user){
        res.sendFile(__dirname +"/public/secret.html");
    }
    else
    {
        res.sendFile(__dirname+"/public/index.html");
    }
   
});

app.listen(3000,()=>
{
console.log("server running 3000");
}
)

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
