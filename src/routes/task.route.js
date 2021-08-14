const router = require("express").Router();
// const { createTask, readTasks, updateTask, deleteTask } = require('../controllers/task.controller')
const {readTasks}=require('../controllers/task.controller')
const { auth } = require("../middlewares");

// router.post("/", [auth.check], createTask);
router.get("/", [auth.check], readTasks);
// router.put("/:id", [auth.check], updateTask);
// router.delete("/:id", [auth.check], deleteTask);

module.exports = router;
