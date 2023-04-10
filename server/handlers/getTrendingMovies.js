const request = require("request-promise");
require("dotenv").config();
const { API_KEY } = process.env;

const getTrendingMovies = async (req, res) => {
  const options = {
    uri: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    headers: {
      Accept: "application/json",
    },
    json: true,
  };
  try {
    const response = await request(options);
    res.status(200).json({ status: 200, data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTrendingMovies };
