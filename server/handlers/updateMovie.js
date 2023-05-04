const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const updateMovie = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId, movieId, updatedMovie } = req.body;

  try {
    await client.connect();
    const db = await client.db("final-project");

    const result = await db
      .collection("watchlist")
      .updateOne(
        { userId, "movie.id": movieId },
        { $set: { "movie.watched": updatedMovie.watched } }
      );

    if (!result) {
      return res
        .status(500)
        .json({ status: 500, message: "Failed to update movie!" });
    }
    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: 404, message: "Movie not found!" });
    }
    return res
      .status(200)
      .json({ status: 200, message: "Movie has been updated!" });
  } catch (error) {
    console.log(error);
  }
  client.close();
};

module.exports = { updateMovie };
