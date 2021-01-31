const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
    const id = req.params.id
  // Add query to get the description.  I will JOIN tables once I get the details page to show with the description.
  const queryText = `SELECT "movies".title, "movies".description, "movies".poster  
  FROM "movies"
  JOIN "movie_genres" ON "movie_genres".genre_id = "movies".id
  WHERE id = $1`;
  pool
    .query(queryText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});


module.exports = router;

