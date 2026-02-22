import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup" , (req, res)=>{
    res.send("This is  working")
})

userRouter.post("/signin", (req, res)=>{

})

userRouter.get("/course", (req, res)=>{

})

export default userRouter;