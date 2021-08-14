const model = require('../database/models/index')

const createUser = async (req,res)=>{
    const data = req.body;
    const inserted = await model.User.create(data);
    return res.status(201).json({inserted})
}

const readUsers = async (req,res) =>{
    const users = await model.User.findAll({attributes: ['firstName', 'lastName', 'email', 'phone', 'id']})
    return res.status(200).json({users})
}

const updateUser = async (req,res) =>{
    const {id} = req.params
    const data = req.body
    const updated = await model.User.update(data,{where: { id : id }});
    console.log(updated)
    const user = await model.User.findByPk(id)
    return res.status(200).json({user})
}

const deleteUser = async (req,res) =>{
    const {id} = req.params
    await model.User.destroy({where: { id : id }})
    const users = await model.User.findAll()
    return res.status(200).json({users})
}

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser
}