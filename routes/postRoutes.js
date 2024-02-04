let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all posts
//http://localhost:8800/api/posts/  Adds a GET route to return all posts
router.get("/", (req, res) => {
    Controllers.postController.getPosts(res);
  });

// router.get("/clear", (req, res) => {
//     Controllers.postController.clearPost(req, res);
// });
  
  // Adds a POST route to create a new post
  //http://localhost:8800/api/posts/create  Adds a POST route to return all posts
  router.post("/create", (req, res) => {
    Controllers.postController.createPost(req.body, res);
  });
  
  // http: //localhost:8800/api/posts/<id> Adds a PUT route to update a post
  router.put("/:id", (req, res) => {
    Controllers.postController.updatePost(req, res);
  });
  
  // http: //localhost:8800/api/posts/<id> Adds a DELETE route to update a post
  router.delete("/:id", (req, res) => {
    Controllers.postController.deletePost(req, res);
  });
  
  module.exports = router;
  