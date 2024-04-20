const express = require("express");
const { createMatch, fetchMatches } = require("../controller/match");
const authenticate = require("../middleware/authentication");

const router = express.Router();

router.post("/create",authenticate,createMatch);
router.get("/fetch",authenticate,fetchMatches);

module.exports=router;