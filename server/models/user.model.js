import mongoose from "mongoose";


//create user schema and set rules
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true, //no 2 users can have the same username
    },
    email:{
        type:String,
        required:true,
        unique:true, //no 2 users can sign up with the same email, 1 email -> 1 account
    },
    password:{
        type:String,
        required:true,     
    },

}, {timestamps:true}); //to save time of user created/updated

const User= mongoose.model('User',userSchema); //user model created

export default User; // to use the user model anywhere 
