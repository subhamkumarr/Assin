import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://subham48520kumar:subham123@cluster0.eozu2.mongodb.net/blog-app');
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};