import mongoose from "mongoose";
export async function connectDB(){
    try {
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI as string);
        }

     console.log('db is alredy connected');
     
       
    } catch (error) {
        console.log("connection error in db ", error);
        
    }
}