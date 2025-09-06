import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { Env } from "./env.config";
import multer from "multer";

cloudinary.config({
  cloud_name: Env.CLOUDINARY_CLOUD_NAME,
  api_key: Env.CLOUDINARY_API_KEY,
  api_secret: Env.CLOUDINARY_API_SECRET,
});

const STORAGE_PARAMS = {
  folder: "images",
  allowed_formats: ["jpg", "png", "jpeg", "pdf"],
  resource_type: "raw" as const, 
  quality: "auto:good" as const,
};

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    ...STORAGE_PARAMS,
    public_id: file.originalname.split(".")[0], 
  }),
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024, files: 1 }, 
  fileFilter: (_, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
    if (!allowedMimes.includes(file.mimetype)) {
      return cb(new Error("Only .jpg, .jpeg, .png, and .pdf formats are allowed!"));
    }
    cb(null, true);
  },
});
