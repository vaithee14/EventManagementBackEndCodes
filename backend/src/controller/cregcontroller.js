const User = require("../modals/cregmodals");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

// nodemailer Transpoter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "svaithi2004@gmail.com",
    pass: "xfsw nogn nwik timm",
  },
});

// Register and Send Email
const registerUser = async (req, res) => {
  try {
    const { username, email, mobile, password } = req.body;

    // Check if user already exists
    const existingUsers = await User.findOne({ email: email });
    console.log(existingUsers, "existingUser");

    if (existingUsers) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      username,
      email,
      mobile,
      password: hashedPassword,
    });
    await newUser.save();

    // send welcome Email
    await transporter.sendMail({
      from: "svaithi2004@gmail.com",
      to: email,
      subject: "Welcome to Our Event Platform!",
      html: `
        <h2>Welcome, ${username}!</h2>
        <p>Thank you for registering. You can now book tickets for upcoming events.</p>
        <p>Best Regards,<br>Your Event Team</p>`,
    });

    res
      .status(201)
      .json({ message: "Registration successful. Check your email!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// user login
const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    await transporter.sendMail({
      from: "svaithi2004@gmail.com",
      to: email,
      subject: "Login Successful",
      html: `<h2>Hello, ${user.username}!</h2>
             <p>You have successfully logged in.</p>`,
    });
    res.status(200).json({ message: "Login successful. Email sent!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, userlogin };
