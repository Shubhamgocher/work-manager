import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    name:String,
    email:{
        type:String,
        required:true,
       },
    password:{
        type:String,
        required:[true,"password Require"],
    },
    about:String,
})
export const UserModel = mongoose.models.users || mongoose.model("users",UserSchema);