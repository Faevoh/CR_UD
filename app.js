const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is The CRUD team, Welcome Aboard")
});

module.exports = app