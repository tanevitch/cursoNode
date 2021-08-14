const model = require('../database/models/index')
const bcrypt = require('bcryptjs')

// this method should be removed because it shouldn't works from an authenticated user session, 
// unless the requirements allows users and admin to create accounts for example. Need to review here and in 
// auth.register
const createUser = async (req,res)=>{

    let { username, password, firstName, lastName, email, phone } = req.body;
    const checkExist = await model.User.findOne({ where: { username: username } });
    if (checkExist) {
        return res.status(401).send({ message: 'Username exists' });
    }
    ({ username, firstName, lastName, email, phone }= await model.User.create({
        firstName,
        lastName,
        phone,
        email,
        password: bcrypt.hashSync(password, 8),
        username,
      }))
    const inserted= { username, firstName, lastName, email, phone }
    return res.status(201).json({inserted})
}

const readUsers = async (req,res) =>{
    const users = await model.User.findAll({
        attributes: ['id', 'username', 'firstName', 'lastName', 'email', 'phone'],
        include: [{ model: model.Task, attributes: ['id', 'name', 'description', 'creationDate', 'expirationDate', 'completed'] }],
      });
    return res.status(200).json({users})
}

const updateUser = async (req,res) =>{
    const {id} = req.params
    const data = req.body
    const updated = await model.User.update(data,{where: { id : id }});
    console.log(updated)
    const user = await model.User.findByPk(id, {attributes: ['id', 'username', 'firstName', 'lastName', 'email', 'phone']})
    return res.status(200).json({user})
}

const deleteUser = async (req,res) =>{
    const {id} = req.params
    await model.User.destroy({where: { id : id }})
    const users = await model.User.findAll({attributes: ['id', 'username', 'firstName', 'lastName', 'email', 'phone']})
    return res.status(200).json({users})
}

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser
}