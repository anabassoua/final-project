const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("final-project");
  const result = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(id) });
  if (result.deletedCount > 0) {
    res.status(200).json({ status: 200, message: "User deleted successfully" });
  } else {
    res.status(404).json({ status: 404, message: "User does not exist" });
  }

  client.close();
};

module.exports = { deleteUser };
