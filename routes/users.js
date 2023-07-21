const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/users");
const validateBodyUsers = require("../middlewares/validateBodyUsers");
const authenticate = require("../middlewares/authenticate");
const userSchema = require("../schemas/users");

router.post("/login", validateBodyUsers(userSchema), ctrl.login);
router.get("/protected", authenticate, ctrl.protected);

module.exports = router;
