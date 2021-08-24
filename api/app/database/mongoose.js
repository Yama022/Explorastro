const mongoose = require("mongoose");
const log = require("../utils");

const mongOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(process.env.MONGODB_URI, mongOptions);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  if (err) {
    return log.error(err);
  }

  log.success("Mongoose connected");
});

module.exports = mongoose;