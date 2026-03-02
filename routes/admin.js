import express from "express"
import { Router } from "express";
import { adminModel, userModel } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { string, success, z } from "zod";

const adminRouter = Router();

adminRouter.use(express.json());

adminRouter.get("/dashboard", (req, res) => {
    res.send("Admin dashboard get request is succesful")
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
        });

        res.status(202).json({ message: "you are signed up" })

    } catch (err) {
        res.status(404).json(err)
    }
})


adminRouter.post("/signin", async (req, res) => {
    try {

        const verifySchema = z.object({
            email: z.string().max(100).min(3),
            password: z.string().max(25).min(8)
        })
        const result = verifySchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const {email, password} = result.data;
        const admin = await adminModel.findOne({ email: email });


        if (!admin) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (isMatch) {
            res.status(200).json({ message: "Signed in successfully" })
        } else {
            res.json({ message: "incorrect password" })
        }
    }
    catch (err) {
        res.status(500).json({ Message: "Server error", error: err.message });
    }

})


adminRouter.post("/course", (req, res) => {
    res.send("Admin course is succefully post")
})

adminRouter.put("/course", (req, res) => {
    res.send("Admin course succefully put")
})
export default adminRouter;