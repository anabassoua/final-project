const request = require("request-promise");
require("dotenv").config();
const { API_KEY } = process.env;

const getActions = async (req, res) => {
  // This line below gives us the ability to request the page since we're using a pagination.
  const page = req.query.page || 1;

  const options = {
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=28`,
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

module.exports = { getActions };
