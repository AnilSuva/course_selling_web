import { Router } from "express";

const courseRouter = Router();
courseRouter.get("/purchase", (req, res)=>{
    res.send("/course/purchase is working")
})

courseRouter.get("/", (req, res)=>{
    res.send("/courses is working")
})

export default courseRouter;