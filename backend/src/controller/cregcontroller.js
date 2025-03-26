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
    const salt = await bcrypt.genSalt(10);
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
    const mailOptions = {
      from: "svaithi2004@gmail.com",
      to: email,
      subject: "Welcome to Our Event Platform!",
      html: `
      <h2>Welcome, ${email}!</h2>
      <p>Thank you for registering for our events. You can now book tickets for upcoming events.</p>
      <p>Best Regards,<br>Your Event Team</p>
       `,
    };
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Check your email! or password" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// user login
const userlogin = async (req, res) => {
  try {
    const { username, email, mobile, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const mailOptions = {
      from: "svaithee2004@gmail.com",
      to: email,
      subject: "Login Successful",
      html: `<h2>Hello, ${email}!</h2>
         <p>Thank you for  login for our events. You can now book tickets for upcoming events..</p>
         <p>Best Regards,<br>Your Event Team</p>`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Login successful. Email sent!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, userlogin };
