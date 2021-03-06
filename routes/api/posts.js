const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

const validatePostInput = require("../../validation/post");

//@route  DELETE api/posts/:id
//@desc   Delete post by id
//@access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          //check for post owner
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({
              notauthorized: "usuario no autorizado para eliminar este post"
            });
          }

          //delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res
            .status(404)
            .json({ postnotfound: "no se ha encontrado este post" })
        );
    });
  }
);

//@route  GET api/posts/:id
//@desc   Get post by id
//@access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.json(post);
    })
    .catch(err =>
      res
        .status(404)
        .json({ nopostfount: "no se ha encontrado un post con ese id" })
    );
});

//@route  POST api/posts
//@desc   Create posts
//@access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostsfound: "no se han encontrado posts" })
    );
});

//@route  POST api/posts
//@desc   Create posts
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

router.get("test/", (req, res) =>
  res.json({
    msg: "users works"
  })
);

module.exports = router;
