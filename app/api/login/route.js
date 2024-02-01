import { connectDb } from "@/helper/db";
import { UserModel } from "@/modles/usermodel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
connectDb();

export async function GET(request){
    try {
        const token=request.cookies.get("authToken")?.value;
        // console.log(token);
        const data=jwt.verify(token,process.env.JWT_KEY);
        // console.log(data);
        const user=await UserModel.findById(data._id);
        // console.log(user);
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return new NextResponse(error);
        
    }

}
export async function POST(request){
    const {email,password}=await request.json();
    console.log("e:",email,"p:",password)
    try {
        //find user
        console.log("hellow");
        const user =await UserModel.findOne({
            email:email
        });
        // console.log("hellow2");
        //verify user
        //authentication
        // console.log(user); 
        const response=NextResponse.json({
            message:"success",
            success:true,
            user:user,

        });
        if(user===null){
            // console.log("hey:",password);
            // console.log("hash",user.password);
            throw new Error(
                'Invalid User ! Please Provide Correct Email');
            

        }

        const matched=bcrypt.compareSync(password,user.password)
            if(!matched){
                throw new Error('Invalid User ! Password not matched')
            }
            
                //create token
                console.log("userid:",user._id);
                const token=jwt.sign({
                    _id:user._id,
                    name:user.name

                },process.env.JWT_KEY);
                response.cookies.set("authToken",token,{
                    expiresIn:"1d",
                    httpOnly:true,
                });


            
            return response;
    } catch (error) {
        console.log(error);
        return new NextResponse(error);
    }
        
    
}