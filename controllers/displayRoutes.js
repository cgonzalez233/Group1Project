const router = require("express").Router();
// const sequelize = require("../config/connection");
const {User} = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res)=> {
    let user;

    if (req.session.logged_in){
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ["password"]
            }
        })
        user = userData.get({
            plain: "true"
        })
    };
    res.render("home", {
        ...user,
        logged_in: req.session.logged_in
    });
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

router.get("/signup", (req, res) => {
    res.render("signup");
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
//         const  = dbPostData.get({ plain: true });
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