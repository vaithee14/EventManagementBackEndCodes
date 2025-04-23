const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const storedDatas = require("./src/config/db");
const MusicRoute = require("./src/route/musiccategoryroute");
const BirthdayRoute = require("./src/route/birthdayRouter");
const ServicesRouter = require("./src/route/serviceRouter");
const WeddingRouter = require("./src/route/weddingRouter");
const CorporateRouter = require("./src/route/corporateRoute");
// enquiry res
const EnquiryRouter = require("./src/route/enquiryRouter");
app.use(express.json());
app.use(cors());

// serviceRouter
app.use("/user", ServicesRouter);

// get music from category
app.use("/api/music", MusicRoute);
app.use("/api/birthday", BirthdayRoute);
app.use("/apienquiry", EnquiryRouter);
app.use("/wedding/music", WeddingRouter);
app.use("/corporate", CorporateRouter);

storedDatas.on("open", () => {
  app.listen(4050, () => {
    console.log("Server is running on port 4050");
  });
});
storedDatas.on("error", (err) => {
  console.error("Error while connecting to the database:", err);
});

module.exports = app;
