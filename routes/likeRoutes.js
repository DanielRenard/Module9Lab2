let express = require("express");
let router = express.Router();
let Controllers = require('../controllers')

// Adds a GET route to return all posts
//http://localhost:8080/api/like/  Adds a GET route to return all like
router.get("/", (req, res) => {
    Controllers.likeController.getlike(res);
  });

  // Adds a POST route to create a new comment
  //http://localhost:8080/api/like/create  Adds a POST route to return all commnents
  router.post("/create", (req, res) => {
    Controllers.likeController.createLike(req.body, res);
  });
  
//   // http: //localhost:8080/api/like/<id> Adds a PUT route to update a comment
//   router.put("/:id", (req, res) => {
//     Controllers.likeController.updateLike(req, res);
//   });
  
  // http: //localhost:8080/api/like/<id> Adds a DELETE route to update a comment
  router.delete("/:id", (req, res) => {
    Controllers.likeController.deleteLike(req, res);
  });
  
  module.exports = router;