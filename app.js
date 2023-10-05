require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DefaultData = require("./defaultdata");
const router = require("./routes/router");
const cookiParser = require("cookie-parser")
require('./db/conn');

const port = 8005
app.get('/',(req,res)=>{
    res.status(200).json({msg:'okay'})
})

// middleware
app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


app.listen(port,()=> console.log(`server is running on port number ${port}`));



