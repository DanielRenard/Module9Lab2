"use strict";
let Models = require("../models"); // matches index.js

const getLikes = (res) => {
  // finds all comments
  Models.Like.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (data, res) => {
  // creates a new comment using JSON data POSTed in req.body
  console.log(data);
  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      //   res.status(500).send({result: 500, error: err.message})
      res.send({ result: 500, error: err.message });
    });
};

const updateLike = (req, res) => {
  // updates the comment matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Like.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteLike = (req, res) => {
  // deletes the user matching the ID from the param
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.satus(200).send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};
// ++ Test updating and deleting a comment using Postman

module.exports = {
getLikes,
createLike,
updateLike,
deleteLike
};