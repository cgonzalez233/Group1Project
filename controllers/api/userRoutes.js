const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.put("/updateTeam", async (req, res) => {
//   console.log(req.body);
//   try {
//     const teamData = await User.update(req.body, {
//       where: {
//         id: req.session.user_id,
//       },
//     });
//     res.status(200).json(teamData);
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

router.get("/getTeam", async (req, res) => {
  try {
    // const teamData = await User.findByPk(req.session.user_id, {
    //   attributes: ["team"],
    // });
    // const team = await teamData.get({
    //   plain: "true",
    // });
    res.status(200).json([]);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
