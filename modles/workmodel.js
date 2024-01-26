import mongoose from "mongoose";
import { Schema } from "mongoose";

const TaskSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        default:Date.now(),
        
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending",
    },
    userId:{
        type:mongoose.ObjectId,
        required:true,
    }
});
export const Task=mongoose.model.Task || mongoose.model("Task",TaskSchema);