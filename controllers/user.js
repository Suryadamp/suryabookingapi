const User = require("../models/Users");

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted sucessfully");
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const hotel = await User.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};

//GET ALL
const getUsers = async (req, res, next) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};
