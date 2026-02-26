import express from 'express';
import userRouter from './routes/user.js';
import courseRouter from './routes/course.js';
import adminRouter from './routes/admin.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const port = 3000;
const app = express()

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/course", courseRouter)

async function main() {
    await mongoose.connect(process.env.database_URL)
    app.listen(port, ()=>{
    console.log(`app is listing on http://localhost:3000/`)
})
}

main();