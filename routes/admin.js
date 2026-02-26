import { Router } from "express";
import { adminModel } from "../db.js";

const adminRouter = Router();

adminRouter.get("/dashboard", (req, res) => {
    res.send("Admin dashboard get request is succesful")
})

adminRouter.post("/signin", (req, res) => {
    res.send("Admin signin working")
})

adminRouter.post("/signup", (req, res) => {
    res.send("Admin signup is succefully post")
})

adminRouter.post("/course", (req, res) => {
    res.send("Admin course is succefully post")
})

adminRouter.put("/course", (req, res) => {
    res.send("Admin course succefully put")
})
export default adminRouter;