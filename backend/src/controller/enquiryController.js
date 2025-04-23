const EnquiryModel = require("../modals/enquiryModel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "svaithi2004@gmail.com",
    pass: "fwba abqd ocky zmct",
  },
});
const EnquiryController = async (req, res) => {
  try {
    const { name, email, date, mobile, city, select, message } = req.body;

    const newEnquiry = new EnquiryModel({
      name,
      email,
      date,
      mobile,
      city,
      select,
      message,
    });
    await newEnquiry.save();
    const mailOptions = {
      from: "svai2004@gmail.com",
      to: email,
      subject: "Thank You for Your Event Enquiry",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for your enquiry. Here are the details you submitted:</p>
        <ul>
          <li><strong>Event Date:</strong> ${date}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>Service:</strong> ${select}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>We will get back to you soon!</p>
        <p>— Event Management Team</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    res
      .status(201)
      .json({ message: "Enquiry submitted successfully", enquiry: newEnquiry });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting enquiry", error: error.message });
  }
};
module.exports = {
  EnquiryController,
};
