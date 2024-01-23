import express from "express";
import { getUser, uploadImage } from "../controller/userController.js";
const router = express.Router();
import multer from "multer";

// image storage path
const imageConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

// image filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Image allowed"));
  }
};

const upload = multer({
  storage: imageConfig,
  fileFilter: isImage,
});

router.route("/").get(getUser);
router.route("/register").post(upload.single("photo"), uploadImage);

export default router;
