const UserModal = require("../modals/usermodal");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "svaithi2004@gmail.com",
    pass: "abgl rnyo dkex hvxh",
  },
});

// User Registration
const UserRegistration = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModal.findOne({ email: email });
    console.log(existingUser, "existingUser");

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserModal({ email, password: hashedPassword });
    await newUser.save();

    // Send Welcome Email
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

// User Login
const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModal.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Send Email Notification
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

module.exports = { UserRegistration, UserLogin };
