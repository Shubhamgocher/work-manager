import { connectDb } from "@/helper/db";
import { Task } from "@/modles/workmodel";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request,{params}){
    const {userId}=params;
    try {
        const AllTasks=await Task.find({
            userId:userId,
        });
        return NextResponse.json(AllTasks);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Faild to get tasks",
            status:404,
            success:false,
        })
    }

}