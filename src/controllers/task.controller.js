const model = require('../database/models/index');

const readTasks = async (req, res) => {
  const tasks = await model.Task.findAll();
  return res.status(200).json({ tasks });
};

module.exports = {readTasks}