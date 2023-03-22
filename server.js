const express = require("express");
const port = 1300;
const app = express();

app.get("/api", (req,res)=>{
    res.send("Welcome")
});

app.listen(port, ()=>{
    console.log(`listening to port: ${port}`)
})