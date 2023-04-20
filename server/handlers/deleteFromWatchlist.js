const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deleteFromWatchlist = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId, movieId } = req.query;

  try {
    await client.connect();
    const db = await client.db("final-project");

    const result = await db
      .collection("watchlist")
      .deleteOne({ userId, "movie.id": parseInt(movieId) });

    if (result.deletedCount > 0) {
      res
        .status(200)
        .json({ status: 200, message: "User deleted successfully" });
    } else {
      res.status(404).json({ status: 404, message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
  await client.close();
};

module.exports = { deleteFromWatchlist };
