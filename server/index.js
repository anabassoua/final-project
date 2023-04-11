"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888;

const { addUsers } = require("./handlers/addUsers");
const { getActions } = require("./handlers/genres/getActions");
const { getTrendingMovies } = require("./handlers/getTrendingMovies");
const { getHorror } = require("./handlers/genres/getHorror");

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
  .get("/genre/actions", getActions)
  .get("/genre/horror", getHorror)
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
