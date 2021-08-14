const router = require("express").Router();
const { readUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { auth } = require("../middlewares");

// check middleware function will run every time a method http has been required 
router.post("/", [auth.check], createUser);
router.get("/", [auth.check], readUsers);
router.put("/:id", [auth.check], updateUser);
router.delete("/:id", [auth.check], deleteUser);

module.exports = router;
