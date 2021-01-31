const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT "movies".description  
  FROM "movies"`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;


// // 
// SELECT "products".description, "warehouse".warehouse
// FROM "products"
// JOIN "wareHouse" ON "warehouse".warehouse 
// JOIN "warehouse_product" ON "warehouse_product".product_id = "products".id;

// JOIN "genres" ON "genres".name
// "movies".title, 

// JOIN "movie_genres" ON "movie_genres".genre_id = "genres".name