const model = require('../database/models/index');

const createTask = async (req,res) =>{
  const { userId } = req; 
  const user = await model.User.findByPk(userId); 
  const { name, description, creationDate, expirationDate } = req.body;
  await model.Task.create({ name, description, creationDate, expirationDate, UserId: userId }).then(
    async (createdTask) => {
      const { name, description, creationDate, expirationDate, UserId} = await createdTask.setUser(user); 
      createdTask = { name, description, creationDate, expirationDate, UserId}
      return res.status(201).json({ createdTask });
    },
  );
}

const readTasks = async (req, res) => {
  const tasks = await model.Task.findAll({attributes: ['id', 'name', 'description', 'creationDate', 'expirationDate', 'completed'],});
  return res.status(200).json({ tasks });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await model.Task.update(data, { where: { id: id } });
  console.log(updated);
  const task = await model.Task.findByPk(id, {attributes: ['id', 'name', 'description', 'creationDate', 'expirationDate', 'completed']});
  return res.status(200).json({ task });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await model.Task.destroy({ where: { id: id } });
  const tasks = await model.Task.findAll({attributes: ['id', 'name', 'description', 'creationDate', 'expirationDate', 'completed']});
  return res.status(200).json({ tasks });
};

module.exports = {createTask, readTasks, updateTask, deleteTask}