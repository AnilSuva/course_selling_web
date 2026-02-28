import express from "express"
import { Router } from "express";
import { adminModel } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { string, success, z } from "zod";

const adminRouter = Router();

adminRouter.use(express.json());

adminRouter.get("/dashboard", (req, res) => {
    res.send("Admin dashboard get request is succesful")
})

adminRouter.post("/signin", (req, res) => {
    res.send("Admin signin working")
})

adminRouter.post("/signup", async (req, res) => {
    try {
        const verifySchema = z.object({
            email: z.string().max(100).min(3),
            password: z.string().min(8).max(25),
            firstName: z.string(),
            lastName: z.string()
        });

        const verifyData = verifySchema.parse(req.body);

        const saltRound = 5;
        const hashedPassword = await bcrypt.hash(verifyData.password, saltRound);

        await adminModel.create({
            email: verifyData.email,
            password: hashedPassword,
            firstName: verifyData.firstName,
            lastName: verifyData.lastName
        })

        res.status(202).json({message: "you are signed up"})
        // const token = jwt.sign(verifyData.password, "THERE IS NO SECRET");
        // res.send(token);

    } catch (err) {
        res.status(404).json("You are alredy signed in"+err)
    }
})

adminRouter.post("/course", (req, res) => {
    res.send("Admin course is succefully post")
})

adminRouter.put("/course", (req, res) => {
    res.send("Admin course succefully put")
})
export default adminRouter;