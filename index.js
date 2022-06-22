const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./db/db');
const PORT = process.env.PORT;
const app = express();
app.use(cors(),express.json());

app.get('/',(req,res,next)=>{
    res.status(200).json({message:"Attendence 2.0 is running smoothly"});
})

connectDb('mongodb://localhost:27017/attendence-2').then(()=>{
    console.log('Database connected');
    app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`);
    })
})


