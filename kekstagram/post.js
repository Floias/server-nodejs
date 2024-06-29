import mongoose from "mongoose";

const Post = new mongoose.Schema({
  id: { type: Number, require: true },
  url: { type: String, require: true },
  likes: { type: Number, require: true },
  comments: [{
    id: { type: Number, require: true },
    avatar: { type: String, require: true },
    message: { type: String, require: true },
    name: { type: String, require: true },
  }],
  description: { type: String, require: true }
});

export default mongoose.model('Post', Post);
