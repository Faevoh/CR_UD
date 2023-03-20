const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./Configs/config.env"});
const app = require("./app");

const Database = process.env.DATABASE;

mongoose.set("strictQuery", true);
mongoose.connect(Database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=>{
    console.log("MongoDb is connected to CRUD")
}).then( ()=>{
    app.listen(process.env.PORT || 8005, ()=>{
        console.log("Server is Connected to CRUD")
    })
});
