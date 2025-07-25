const fs = require ("fs");

/*
fs.writeFile("message.txt","I am here to save ",(err)=>{
    if (err) throw new err;
    console.log ("File saved");
});
*/


fs.readFile("./message.txt","utf-8",(err,data)=>{
     if (err) throw new err;
    console.log (data)
});

console.log("Hi I am Nirmal");

const a = 10;
const b = 20;
const sum =a+b;

console.log(sum,);