const Post = require("../models").Post;

module.exports = {
  async store(req, res) {
    Post.findOne({ where: { id: req.params.id } }).then(post => {
      post.likes += 1;

      post.save();

      req.io.emit("like", post);

      return res.json(post);
    });
  }
};
