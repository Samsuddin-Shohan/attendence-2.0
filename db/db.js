const mongoose = require("mongoose");

function connectDb  (connectionString){
    return mongoose.connect(connectionString);

}
module.exports = connectDb;


'mongodb://localhost:27017/test'