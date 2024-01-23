import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./DB/ConnectDB.js";
import userRoute from "./routes/userRouter.js";

const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/api/v1", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
