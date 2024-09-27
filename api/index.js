import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

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
app.use("/api/auth", authRouter);

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode: statusCode,
        message: message,
    });
});