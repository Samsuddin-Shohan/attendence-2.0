const error = require("../utils/error");
const {createNewUser,findUserByProperty}=require('./userService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registrationService({name,email,password}){
    let user = await findUserByProperty('email',email);
    if(user){
        throw error('User already existed',401);
    } 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    user = await createNewUser({name,email,password:hash});
    return user;

}
async function loginService ({email,password}){
    let user = await findUserByProperty('email',email);
    if(!user){
        throw error('Your email is not corerect or not registered',401);
    }
    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch){
        throw error('Password is incorrect',401);
    }
    const payload = {
        name:user.name,
        email:user.email,
        roles:user.roles,
        accountStatus:user.accountStatus
    }
    return  jwt.sign(payload,'secret-key');
}
module.exports = {
    registrationService,
    loginService
}