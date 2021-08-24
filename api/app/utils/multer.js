const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file.originalname);
    if (!file) return cb(new Error("No file provided"), false);
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    // For prevent file name conflict, we generate a unique name @see https://github.com/expressjs/multer
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + file.originalname.split(".").pop());
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
