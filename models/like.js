const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user_Id: { type: Schema.Types.ObjectId, ref: 'user', required: true},
  comment_Id: { type: Schema.Types.ObjectId, ref: 'comment', required: true},
//   like: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("like", likeSchema);