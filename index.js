const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(),express.json());

app.get('/',(req,res,next)=>{
    res.status(200).json({message:"Attendence 2.0 is running smoothly"});
})


