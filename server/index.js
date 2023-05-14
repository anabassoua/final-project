"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888;

const { addUsers } = require("./handlers/addUsers");
const { deleteUser } = require("./handlers/deleteUser");
const { getActions } = require("./handlers/genres/getActions");
const { getAdventure } = require("./handlers/genres/getAdventure");
const { getComedy } = require("./handlers/genres/getComedy");
const { getDrama } = require("./handlers/genres/getDrama");
const { getHorror } = require("./handlers/genres/getHorror");
const { getMoviebyId } = require("./handlers/getMoviebyId");
const { getScifiction } = require("./handlers/genres/getScifiction");
const { getThriller } = require("./handlers/genres/getThriller");
const { getPopular } = require("./handlers/getPopular");
const { getTopRatedMovies } = require("./handlers/getTopRatedMovies");
const { getTrendingMovies } = require("./handlers/getTrendingMovies");
const { getSearch } = require("./handlers/getSearch");
const { AddToWatchlist } = require("./handlers/addToWatchlist");
const { getWatchlist } = require("./handlers/getWatchlist");
const { deleteFromWatchlist } = require("./handlers/deleteFromWatchlist");
const { updateMovie } = require("./handlers/updateMovie");
const { getMovieByGenre } = require("./handlers/getMovieByGenre");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  .use(morgan("tiny"))
  .use(express.json())

  .get("/test", (req, res) => {
    res.status(200).json({ itWorked: true });
  })

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .get("/trending", getTrendingMovies)
  .get("/genre/:genre", getMovieByGenre)
  .get("/genre/action", getActions)
  .get("/genre/adventure", getAdventure)
  .get("/genre/comedy", getComedy)
  .get("/genre/drama", getDrama)
  .get("/genre/horror", getHorror)
  .get("/genre/scifiction", getScifiction)
  .get("/genre/thriller", getThriller)
  .get("/toprated", getTopRatedMovies)
  .get("/popular", getPopular)
  .get("/api/search", getSearch)
  .post("/api/add-user", addUsers)
  .post("/api/add-to-watchlist", AddToWatchlist)
  .delete("/api/delete-user/:email", deleteUser)
  .get("/movie/:id", getMoviebyId)
  .get("/api/watchlist", getWatchlist)
  .delete("/api/delete-from-watchlist", deleteFromWatchlist)
  .put("/api/update-movie", updateMovie)
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(port, () => console.log(`Listening on port ${port}`));
