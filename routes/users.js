const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

const router = express.Router();

// router.get("/authcheck", verifyToken, (req, res, next) => {
//   res.send("hello,user you are logged");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello,user you are logged and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello,Admin you are logged and you can delete all account");
// });
//UPDATE
router.patch("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;
