const request = require("request-promise");
require("dotenv").config();
const { API_KEY } = process.env;

const getSearch = async (req, res) => {
  const page = req.query.page || 1;
  const { query } = req.query;
  const options = {
    uri: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
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

module.exports = { getSearch };
