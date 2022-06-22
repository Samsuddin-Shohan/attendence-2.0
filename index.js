const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./db/db');
const router = require('./router/index');
const authenticate = require('./middleware/authenticate');
const PORT = process.env.PORT;
const app = express();
app.use(cors(),express.json());
app.use(router);


app.get('/',(req,res,next)=>{
    res.status(200).json({message:"Attendence 2.0 is running smoothly"});
})
app.get('/private',authenticate,(req,res,next)=>{
    let user  = req.user;
    res.json({message:"this is private route",user});
})
app.use((err,req,res,next)=>{
    const status = err.status?err.status:500;
    const message = err.message?err.message:'Something is wrong in server';
    res.status(status).json({message:message});
})

connectDb('mongodb://localhost:27017/attendence-2').then(()=>{
    console.log('Database connected');
    app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`);
    })
})


