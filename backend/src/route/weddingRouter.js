const express = require("express");
const { MusicArtists,getMusicArtist} = require("../controller/weddingContoller");
const router = express.Router();

router.post("/musicartists", MusicArtists);
router.get("/weddingmusicartists", getMusicArtist);  

module.exports = router;
