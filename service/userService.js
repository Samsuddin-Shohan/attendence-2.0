const User = require('../model/User');
const {findById,findOne}=require('mongoose');

async function findUserByProperty(key,value){
    let user;
    if(key == '_id'){
        return user =await User.findById(value)
    }
    return user = await User.findOne({[key]:value});

}

async function createNewUser({name,email,password}){
    const user = new User({email,password,name});
    return user.save();
}
module.exports = {
    findUserByProperty,
    createNewUser
}