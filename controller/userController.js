import User from "../models/UserModel.js";
import cloudinary from "../config/cloudinaryConfig.js";
import moment from "moment";

const getUser = async (req, res) => {
  try {
    const user = await User.find({}).sort();
    return res.status(200).send({ success: true, user });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const uploadImage = async (req, res) => {
  const upload = await cloudinary.uploader.upload(req.file.path);
  console.log("photo:", upload);

  try {
    const uploadedDate = moment(new Date()).format("DD-MM-YYYY");
    console.log("Moment date:", uploadedDate);
    const { name } = req.body;
    const userData = new User({
      name,
      image: upload.secure_url,
      createdAt: uploadedDate,
    });
    console.log("user Data:", userData);

    await userData.save();
    return res.status(200).send({ success: true, userData });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

export { getUser, uploadImage };
