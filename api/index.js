import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();

mongoose.connect("mongodb+srv://Akanksha:akanksha@mern-real-estate-web-ap.uwwyr.mongodb.net/mern-real-estate-web-app?retryWrites=true&w=majority&appName=mern-real-estate-web-app")

    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log('Server is running on port 3000!!!');
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.use("/api/user", userRouter);
