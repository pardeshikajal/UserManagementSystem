const mongoose =require("mongoose");

const emplyeeSchema = new mongoose.Schema({
    name : {
        type :String,
        
    },
    email : {
        type :String,
        
    },
    gender : {
        type :String,
       
    },
    status : {
        type :String,
    }
    
})

//creating collection
const userdb = new mongoose.model("userdb",emplyeeSchema);
module.exports =userdb;

