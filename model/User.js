const {Schema,model}= require('mongoose');
const  validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = ({
    name:{
        type:String,
        minlength:5,
        required:true
    },
    password:{
        type:String,
        minlength:5,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    roles:{
        type:[String],
        default:['Student'],
        
    },
    accountStatus:{
        type:String,
        enum:['Pending','Active','Rejected'],
        default:'Pending'
    }
})

const User = model('User',userSchema);
module.exports = User;