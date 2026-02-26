import { Router } from "express";
import { userModel } from "../db.js";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
    res.send("This is  working")
})

userRouter.post("/signin", (req, res) => {

})

userRouter.get("/course", (req, res) => {

})

export default userRouter;