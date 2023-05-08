const express = require("express");
const router = express.Router();

const Movies = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((response) => {
      console.log(response)
      res.render("../views/movies/movies.hbs", {
        allMovies: response,
      });
    })
    .catch((error) => {
      next(error);
    })
})

router.get("/movie/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((response) => {
      console.log("Pelicula por ID");
      res.render("../views/movies/movie.hbs", {
        movie: response,
      });
    })
    .catch((error) => {
      next(error);
    })
})

module.exports = router;
