const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, nickname, picture, _id } = req.body;
  try {
    await client.connect();
    const db = await client.db("final-project");
    // add users collection and bookmark collection
    // check if user exists :

    const userExists = await db.collection("users").findOne({ email: email });
    if (userExists) {
      res
        .status(200)
        .json({ status: 200, message: "This user already exists!" });
    } else {
      const newUser = { email, nickname, picture, _id };
      const result = await db.collection("users").insertOne(newUser);

      res
        .status(201)
        .json({ status: 201, data: result, message: "New user created!" });
    }
  } catch (err) {
    console.log(err);
  }
  await client.close();
};

module.exports = { addUsers };
