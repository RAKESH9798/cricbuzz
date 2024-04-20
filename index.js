const express = require("express");

const app = express();
app.use(express.json());

const user= require("./src/routes/user");
app.use("/api/user",user);

const match = require("./src/routes/match");
app.use("/api/match",match);

app.listen(4420,()=>{
    console.log("CrickBuzz API is running on port 4420.");
})