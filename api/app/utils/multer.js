const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
});

const storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET,
  acl: "public-read",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + file.originalname.split(".").pop());
  }
});

const upload = multer({
  storage,
  // Limit the size of each uploaded file to 8MB
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    // Check if the file is an image
    const ext = file.originalname.split(".").pop();
    const isImage =
      ext === "jpg" ||
      ext === "png" ||
      ext === "jpeg" ||
      ext === "gif" ||
      ext === "webp";
    if (!isImage) return cb(new Error("File is not an image"), false);
    cb(null, isImage);
  },
}).single("avatar");

module.exports = upload;
