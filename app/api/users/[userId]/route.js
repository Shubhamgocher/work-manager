import { connectDb } from "@/helper/db";
import { User } from "@/modles/usermodel";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request,{params}){
    const {userId}=params;
    console.log(params);
    try {
        const singleUser =await User.findById(userId);
        return NextResponse.json(singleUser);
    } catch (error) {
        console.log(error);
        return NextResponse({
            message:"Failed to get user",
            status:200,
            success:false,
        })
    }

}
export async function PUT(request,{params}){
    console.log(params);
    const {name,email,password,about}=await request.json();
    const {id}=params;
    try {
        const singleUseruser=await User.findById(id);
        user.name=name,
        user.email=email,
        user.password=password,
        user.about=about;

        const updatedUser=await singleUseruser.save();
        return NextResponse.json(updatedUser);


    } catch (error) {
       console.log(error);
       return NextResponse.json({
        message:"Failed to updated ",
        status:200,
        success:false,
       })
        
    }
}

export async function DELETE(request,{params}){
    const {userId}=params;
    try {
        await User.deleteOne({
            _id:userId,
        }
            
        );
        return NextResponse.json({
            message:"User Deleted Sucessfully",
            success:true,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to delete",
            status:200,
            success:false,
        })
        
    }

}