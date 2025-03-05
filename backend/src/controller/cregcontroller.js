// category payment user registration
const bcrypt = require("bcrypt");
const RegistrationModel = require("../modals/cregmodals");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await RegistrationModel.create({
      username,
      email,
      password: hashedPassword,
      mobile,
    });

    res.status(201).json({
      message: "Registration successful!",
      user: userData,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const getUserRegister = async (req, res) => {
  try {
    const users = await RegistrationModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// delete
const deleteUserRegister = async (req, res) => {
  const deletedata = await RegistrationModel.findByIdAndDelete(req.params.id);
  res.send(deletedata);
};

// update user register
const updateUserregister = async (req, res) => {
  const update = await RegistrationModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.send(update);
};

module.exports = {
  registerUser,
  getUserRegister,
  deleteUserRegister,
  updateUserregister,
};
