const router = require("express").Router();
// const sequelize = require("../config/connection");
// const { Post, User, Comment } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
      res.render("home");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/search", (req, res) => {
    res.render("search");
});

router.get("/team", (req, res) => {
    res.render("team");
});

// router.get("/new", withAuth, (req, res) => {
//   res.render("newPost", {
//     layout: "dashboard",
//   });
// });

// router.get("/edit/:id", withAuth, (req, res) => {
//   Post.findByPk(req.params.id)
//     .then((dbPostData) => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
//         res.render("editPost", { layout: "dashboard", post });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;