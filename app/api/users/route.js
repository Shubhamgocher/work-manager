import { connectDb } from "@/helper/db";
import { User } from "@/modles/usermodel";

import { NextResponse } from "next/server"
connectDb();

export async function GET(){
    try {
        const AllUsers= await User.find();
        return NextResponse.json(AllUsers);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to get user",
            status:404,
            success:false,
        })
        
    }
}
export async function POST(request){
    
    const {name,email,password,about}=await request.json();
    const createUser=new User({
        name,
        email,
        password,
        about,
    });
    try {
        const NewUser=await createUser.save();
        return NextResponse.json(NewUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to create user",
            status:200,
            success:false,
        })
        
    }

}