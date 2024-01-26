import mongoose from "mongoose";

export const connectDb= async ()=>{
   
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"My_Tasks",
        })
        console.log("Databse connected sucessully");
        
        //console.log(connection);
    } catch (error) {
        console.log("failed to connect database");
        console.log(error);
    }
}