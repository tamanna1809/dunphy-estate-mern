import mongoose from "mongoose";
import { type } from "os";

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

}, {timestamps:true});

const User= mongoose.model('User',userSchema);

export default User;
