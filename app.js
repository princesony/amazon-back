require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DefaultData = require("./defaultdata");
const router = require("./routes/router");
const cookiParser = require("cookie-parser")
require('./db/conn');
require("dotenv").config();
const port = 8005

// middleware
app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


app.listen(port,()=> console.log(`server is running on port number ${port}`));



