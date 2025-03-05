const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const storedDatas = require("./src/config/db");
const Routers = require("./src/route/categoryRoutes");
const adminRoutes = require("./src/route/adminRoute");
const userRoutes = require("./src/route/userRoute");
const RegisRoute = require("../backend/src/route/cregroute");
const MusicRoute = require("./src/route/musiccategoryroute");
const DanceRoute = require("./src/route/dancingcategoryroute")
app.use(express.json());
app.use(cors());

// categories users
app.use("/user", Routers);

// upcoming events
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// category payment user registration
app.use("/musicregis", RegisRoute);

// get music from category
app.use("/api/music",MusicRoute)
// get dancing from category
app.use("/api/dance", DanceRoute);

storedDatas.on("open", () => {
  app.listen(4050, () => {
    console.log("Server is running on port 4050");
  });
});
storedDatas.on("error", (err) => {
  console.error("Error while connecting to the database:", err);
});

module.exports = app;
