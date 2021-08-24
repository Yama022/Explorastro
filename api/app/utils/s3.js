const aws = require("aws-sdk");

const s3 = new aws.S3();

module.exports = {
  saveFile: (name) => {
    const s3Params = {
      Bucket: process.env.S3_BUCKET,
      Key: name,
      Expires: 60,
      ContentType: fileType,
      ACL: "public-read",
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  },
};
