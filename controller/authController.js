const error = require("../utils/error");
const {registrationService,loginService} = require('../service/authService');

async function loginController(req,res,next){
    console.log('login hitted');
    const {email,password}= req.body;
    if(!email || !password){
        throw error('Please provide asking information',401);
    }
    try{
        const token = await loginService({email,password});
        res.status(200).json({message:"login succeeded",token})
    }
    catch(e){
        next(e)
    }

}
async function registrationController (req,res,next){
    console.log('registration hitted');
    const {name,email,password}= req.body;
    if(!name || !email || !password){
        throw error('Please provide asking information',401);
    }
    try{
        const user = await registrationService({name,email,password});
        console.log(user);
        res.status(201).json({message:"user created",user});

    }catch(e){
        next(e);
    }
   
    
}
module.exports = {
    loginController,
    registrationController
};