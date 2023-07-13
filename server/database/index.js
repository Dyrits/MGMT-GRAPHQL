const mongoose = require("mongoose");

const connect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log(`Mongo successfully connected. The database is hosted on ${connection.host.green.bold}.`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;