import { Router } from "express";
import { courseModel } from "../db.js";

const courseRouter = Router();
courseRouter.get("/purchase", (req, res) => {
    res.send("/course/purchase is working")
})

courseRouter.get("/preview", (req, res) => {
    res.send("/courses is working")
})

export default courseRouter;