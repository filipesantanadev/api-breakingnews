const mongoose = require("mongoose");
const userService = require("../services/user.service");

// Middleware to validate if the ID is a valid MongoDB ObjectId
const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID" });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Middleware to check if the user exists in the database
const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { validId, validUser };
