const express = require('express');
const router = express.Router();

const {home , createuser} = require("../controllers/userControllers")

// /api/user + /

router.get("/", home);

router.post("/create", createuser)


module.exports = router;