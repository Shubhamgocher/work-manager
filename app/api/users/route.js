import { connectDb } from "@/helper/db";
import {  UserModel } from "@/modles/usermodel";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server"
connectDb();

//get login user

export async function GET(){
    try {
        const AllUsers= await UserModel.find();
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
    const hashPassword=bcrypt.hashSync(password,10);
    const createUser=new UserModel({
        name,
        email,
        password:hashPassword,
        about,
    });
    try {
        
        const NewUser=await createUser.save();
        return NextResponse.json(NewUser,{
            message:"User created Successfully",
            success:true,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to create user",
            status:200,
            success:false,
        })
        
    }

}