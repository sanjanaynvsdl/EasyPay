const express = require ('express');
const dotenv = require('dotenv');
dotenv.config();

const  mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes/index");
const app = express();


//parse-incoming req body.
app.use(express.json());

//allowed cors
app.use(cors());

app.get("/", (req,res)=>{
    res.send("working!")
});

//all-routes
app.use("/api/v1", routes);

//connect to db
async function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Successfully connected to mongodb");
        app.listen(3000,()=>{
            console.log('server is listening to port 3000')
        });
    })
    .catch((err)=>{
        console.error(`Error while connecting to db : ${err}`)
    })
}
connectDB();

