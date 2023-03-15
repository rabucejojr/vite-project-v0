const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


app.use(express.json())

mongoose.connect("mongodb+srv://rabucejo:<password>@management.lt4hoy8.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
});

app.listen(port, ()=>{
    console.log(`server running in port ${port}`)
})