"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888;

const { addUsers } = require("./handlers/addUsers");
const { getActions } = require("./handlers/genres/getActions");
const { getAdventure } = require("./handlers/genres/getAdventure");
const { getComedy } = require("./handlers/genres/getComedy");
const { getDrama } = require("./handlers/genres/getDrama");
const { getHorror } = require("./handlers/genres/getHorror");
const { getScifiction } = require("./handlers/genres/getScifiction");
const { getThriller } = require("./handlers/genres/getThriller");
const { getTrendingMovies } = require("./handlers/getTrendingMovies");

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
  .get("/genre/action", getActions)
  .get("/genre/adventure", getAdventure)
  .get("/genre/comedy", getComedy)
  .get("/genre/drama", getDrama)
  .get("/genre/horror", getHorror)
  .get("/genre/scifiction", getScifiction)
  .get("/genre/thriller", getThriller)
  .post("/api/add-user", addUsers)
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
