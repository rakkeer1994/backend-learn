const express=require("express");
const cors = require("cors")
const app=express();
const mainRouter=require('./routes')
app.use(cors());

// app.get("/user")
// app.get("/employee") we do like this but now

app.use("/api/v1", mainRouter)

app.listen(5000, ()=>{
    console.log("Application is started")
})