const express = require ('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const routes = require("./routes/index");
const connectDB = require("./models/db");


const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req,res)=>{
    res.send("working!")
});

//root-router
app.use("/api/v1", routes);


//connect to db
connectDB();
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is listening to port 3000')
});



