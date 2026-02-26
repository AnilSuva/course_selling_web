import mongoose, { model, Schema } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect("mongodb+srv://suvaanil80_db_user:f63A6ybul69VgRMf@cluster0.aap1dxu.mongodb.net/course-app")

const userSchema = Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorID: ObjectId
});

const purchaseSchema = Schema({
    userID: ObjectId,
    courseID: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

export {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
} 