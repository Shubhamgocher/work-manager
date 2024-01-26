import { connectDb } from "@/helper/db";
import { Task } from "@/modles/workmodel";
import { NextResponse } from "next/server";
connectDb();
export async function GET(){
    
    try {
        const AllTasks=await Task.find();
        return NextResponse.json(AllTasks);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to get task",
            status:200,
            success:false,
        })
        
    }

}
export async function POST(request){
    const {title,content,startDate,status,userId}=await request.json();
    try {
        const createTask=new Task({
            title,
            content,
            startDate,
            status,
            userId,
        });
        const newTask=await createTask.save();
        return NextResponse.json({
            message:"Task created Successfully",
            status:201,
            success:true,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create task",
            status:200,
            success:false,
        })
        
    }
}