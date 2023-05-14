const request = require("request-promise");
require("dotenv").config();
const { API_KEY } = process.env;

const getMovieByGenre = async (req, res) => {
  const { genre } = req.params;
  // This line below gives us the ability to request the page since we're using a pagination.
  const page = req.query.page || 1;
  const genreId = getId(genre);

  if (!genreId) {
    return res.status(400).json({ error: "Invalid genre" });
  }

  const options = {
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`,
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
    res.status(500).json({ error: "Internal server error" });
  }
};

const getId = (genre) => {
  switch (genre) {
    case "Action":
      return 28;
    case "Adventure":
      return 12;
    case "Comedy":
      return 35;
    case "Drama":
      return 18;
    case "Horror":
      return 27;
    case "Sci-fi":
      return 878;
    case "Thriller":
      return 53;
    default:
      return null;
  }
};

module.exports = { getMovieByGenre };
