const request = require("request-promise");
require("dotenv").config();
const { API_KEY } = process.env;

const getTopRatedMovies = async (req, res) => {
  const options = {
    uri: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
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

module.exports = { getTopRatedMovies };
