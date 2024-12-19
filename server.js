const http= require("http");
const fs=require("fs");

const hostname='127.0.0.1';
const port=80;

const home=fs.readFileSync("home.html");
const Aptitude =fs.readFileSync("Aptitude.html"); 
const ResumeEvaluation =fs.readFileSync("ResumeEvaluation.html");
const MockInterview=fs.readFileSync("MockInterview.html");
const PreviousExperiences =fs.readFileSync("PreviousExpriences.html");

const server=http.createServer((req,res)=>{ 
    const URL=req.url;   
    console.log(URL);
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if (URL=='/'){
        res.end(home);
    }
    else if(URL=='/Aptitude'){
        res.end(Aptitude);
    }
    else if(URL=='/ResumeEvaluation'){
        res.end(ResumeEvaluation);
    
    }
    else if(URL=='/MockInterview'){
        res.end(MockInterview);
    }

    else if(URL=='/PreviousExperiences'){
        res.end(PreviousExperiences);
    }
    else{
        res.end("404 NOT FOUND");
    }
    

})

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}/`);
})
