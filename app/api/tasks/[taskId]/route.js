import { connectDb } from "@/helper/db";
import { Task } from "@/modles/workmodel";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request,{params}){
    const {taskId}=params;
    try {
        const singleTask=await Task.findById(taskId);
        return NextResponse.json(singleTask);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to get Task",
            status:404,
            success:false,
        })
        
    }
}
export async function PUT(request,{params}){
    const {taskId}=params;
    const {title,content,startDate,status,userId}=await request.json();
    try {
        const task=await Task.findById(taskId);
        task.title=title,
        task.content=content,
        task.startDate=startDate,
        task.status=status,
        task.userId=userId;
        const updatedTask=await task.save();
        return NextResponse.json({
            message:"Task updated successfully",
            success:true,
            status:201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update task",
            status:404,  
            success:false        
        });
        
    }

}
export async function DELETE(request,{params}){
    const {taskId}=params;
    try {
        await Task.deleteOne({
            _id:taskId,
        });
        return NextResponse.json({
            message:"deleted successully",
            status:201,
            success:true,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to delete task ",
            status:404,
            success:false,
        })
        
    }
}
