const http = require('http');
const fs= require('fs');

const hostname= '127.0.0.1';
const port= 3000;
const home=fs.readFileSync('./index.html');
const india=fs.readFileSync('./india.html');
const impact=fs.readFileSync('./impact.html');

const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
} );

server.listen(port,hostname,()=>{
    console.log('Server is running at http://127.0.0.1:5500/');
});