import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database connected...");
  } catch (error) {
    console.log("DB connecton error:", error);
    process.exit(0);
  }
};

export default connectDB;
