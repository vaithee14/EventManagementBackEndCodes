const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const storedDatas = require("./src/config/db");
const Routers = require("./src/route/categoryRoutes");
const RegisRoute = require("../backend/src/route/cregroute");
const MusicRoute = require("./src/route/musiccategoryroute");
const DanceRoute = require("./src/route/dancingcategoryroute");
const BirthdayRoute = require("./src/route/birthdayRouter");
const UpcomingEventroute = require("./src/route/upcomingEventRoute");
const UserRegistration = require("./src/route/UserRegRoute");
const UserSubscrib = require("./src/route/emailroute");
app.use(express.json());
app.use(cors());

// categories users
app.use("/user", Routers);

// category payment user registration
app.use("/payment", RegisRoute);

// get music from category
app.use("/api/music", MusicRoute);
// get dancing from category
app.use("/api/dance", DanceRoute);
// birthday api
app.use("/api/birthday", BirthdayRoute);

// upcoimg events
app.use("/upcomingEvent/api", UpcomingEventroute);
// upcoming event user register
app.use("/userRegistration", UserRegistration);

// subscrib
app.use("/user/subscrib", UserSubscrib);

storedDatas.on("open", () => {
  app.listen(4050, () => {
    console.log("Server is running on port 4050");
  });
});
storedDatas.on("error", (err) => {
  console.error("Error while connecting to the database:", err);
});

module.exports = app;
