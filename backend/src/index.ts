import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose'

// mongoose.connect(process.env.URL as string)
mongoose.connect(process.env.URL as string)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/test",async (req:Request, res:Response)=>{
res.json({message: "Hello"});
});

app.listen(3000,()=>{
    console.log("Server started on port 3000...")
})