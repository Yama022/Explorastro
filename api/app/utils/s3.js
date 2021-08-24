const aws = require("aws-sdk");

const s3 = new aws.S3();

module.exports = {
  saveFile: (file) => {
    console.log(file);
    const S3_BUCKET = process.env.S3_BUCKET;

    const s3Params = {
      Bucket: S3_BUCKET,
      Key: file.filename,
      Body: file,
      Expires: 60,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        console.log(err);
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${file.filename}`,
      };
      console.log(returnData);
      // res.write(JSON.stringify(returnData));
      // res.end();
    });
  },
};
