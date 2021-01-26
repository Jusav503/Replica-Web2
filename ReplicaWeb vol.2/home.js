const express = require("express");
const app = express();
const port = 4224;

//configuraçao de la ruta

app.get("/",(req,res)=>{
    res.send("Hello Dog");
});

//configuraçao puertou

app.listen(port,()=>{
    console.log("esta wea funciona!!!!!");
});