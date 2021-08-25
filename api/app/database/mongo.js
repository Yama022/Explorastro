const log = require("log-beautify");
const { MongoClient } = require("mongodb");

module.exports = {
  connect: async () => {
    let db;
    const client = new MongoClient(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = client.db(process.env.MONGO_DB_NAME).collection("events");

    await client.connect()
      .then(() => log.success("Connected to MongoDB"))
      .catch((err) => log.success(err));
    
    db.close = client.close;
    
    return db;
  },
};
