import express from 'express';
import userRouter from './routes/user.js';
import courseRouter from './routes/course.js';

const port = 3000;
const app = express()


app.use("/user", userRouter)
app.use("/course", courseRouter)


app.listen(port, ()=>{
    console.log(`app is listing on http://localhost:3000/`)
})