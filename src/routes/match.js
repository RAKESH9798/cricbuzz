const express = require("express");
const { createMatch } = require("../controller/match");

const router = express.Router();

router.post("/create",createMatch);

module.exports=router;