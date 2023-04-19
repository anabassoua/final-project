const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getWatchlist = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId } = req.query;
  try {
    await client.connect();
    const db = await client.db("final-project");

    const result = await db.collection("watchlist").find({ userId }).toArray();
    if (!result) {
      return res.status(404).json({ status: 404, message: "Not found!" });
    }
    return res.status(200).json({ status: 200, data: result });
  } catch (error) {
    console.log(error);
  }
  client.close();
};

module.exports = { getWatchlist };
