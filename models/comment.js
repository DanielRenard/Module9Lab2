const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user'},
  content: { type: String, trim: true, required: true },
  // like: { type: String, trim: true },
  // user_Id: [ {type: Schema.Types.ObjectId, ref: 'user'}],
  // post_Id: [ {type: Schema.Types.ObjectId, ref: 'post'}],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);