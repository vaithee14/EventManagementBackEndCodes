const userEmailmodal = require("../modals/emailmodal");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "svaithi2004@gmail.com",
    pass: "glvp qjqf fjqw vled",
  },
});

const addEmailRegistration = async (req, res) => {
  try {
    const { email } = req.body;

    const newUser = new userEmailmodal({ email });
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
    res
      .status(201)
      .json({ message: "Registration Successful ! Check Your Email" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { addEmailRegistration };
