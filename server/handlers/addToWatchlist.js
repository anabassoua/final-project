const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const AddToWatchlist = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId, movie } = req.body;

  try {
    await client.connect();
    const db = await client.db("final-project");
    const result = await db
      .collection("watchlist")
      .insertOne({ userId, movie });

    if (!result) {
      res.status(500).json({ status: 500, message: "Failed to add movie!" });
    }
    return res
      .status(200)
      .json({ status: 201, data: result, message: "Movie has been added!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AddToWatchlist };
