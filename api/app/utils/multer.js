const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log(file.originalname);
//     if (!file) return cb(new Error("No file provided"), false);
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     // For prevent file name conflict, we generate a unique name @see https://github.com/expressjs/multer
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + "." + file.originalname.split(".").pop());
//   },
// });

const s3 = new aws.S3({
  accessKeyId: 'ASIASDWD5XT6WCEZV4MP',
  secretAccessKey:'W/W64Ij1+T/jFRytQ3oLhQDzktWuGKmi1Jz1W21b',
});

const storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET,
  acl: "public-read",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, Date.now().toString());
  },
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
    const isImage = ext === "jpg" || ext === "png" || ext === "jpeg" || ext === "gif" || ext === "webp";
    if (!isImage) return cb(new Error("File is not an image"), false);
    cb(null, isImage);
  },
}).single("avatar");

module.exports = upload;
