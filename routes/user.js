import { Router } from "express";
import { userModel } from "../db.js";
import { z, string, success } from "zod";
import jwt from "jsonwebtoken";
import { ParseStatus } from "zod/v3";
import bcrypt from "bcrypt";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    try {
        const verifySchema = z.object({
            email: z.string().max(100).min(3),
            password: z.string().min(8).max(25),
            firstName: z.string(),
            lastName: z.string()
        });

        const result = verifySchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({ message: "Invalid Credentials", error: result.error.message });
        }

        const { email, password, firstName, lastName } = result.data;
        const saltRound = 5;
        const hashedPassword = await bcrypt.hash(password, saltRound);

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });

        res.status(202).json({ message: "You are signed Up" }); 
    } catch(err) {
        res.status(404).json(err);
    }
})

userRouter.post("/signin", (req, res) => {

})

userRouter.get("/course", (req, res) => {

})

export default userRouter;