import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Name"],
  },
  image: {
    type: String,
    required: [true, "Please enter Image"],
  },
  createdAt: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
