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

    //Check if the movie already exists in the db:
    const movieExists = await db
      .collection("watchlist")
      .findOne({ userId, "movie.id": movie.id });

    if (movieExists) {
      return res.status(200).json({ status: 200, message: "Already exists!" });
    }
    const result = await db
      .collection("watchlist")
      .insertOne({ userId, movie });

    if (!result) {
      return res
        .status(500)
        .json({ status: 500, message: "Failed to add movie!" });
    }
    return res
      .status(200)
      .json({ status: 201, data: result, message: "Movie has been added!" });
  } catch (error) {
    console.log(error);
  }
  client.close();
};

module.exports = { AddToWatchlist };
