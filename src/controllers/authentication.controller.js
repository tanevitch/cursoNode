const model = require('../database/models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).send({ message: 'Empty field' });
  }
  const username = req.body.username;
  const password = req.body.password;

  await model.User.findOne({
    where: { username: username },
  }).then((user) => {
    if (!user | !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({ message: 'Invalid credentials'});
    }

    const token = jwt.sign({ id: user.id }, 'clave123!', {
      expiresIn: 7200,
    });

    return res.status(200).send({
      id: user.id,
      username: user.username,
      token: token,
    });
  });
};

const register = async (req, res) => {
  const { username, password, email, phone, firstName, lastName } = req.body;
  if (!username || !password || !email || !phone || !firstName || !lastName) {
    return res.status(401).send({ message: 'Empty field' });
  }
  const checkExist = await model.User.findOne({ where: { username: username } });
  if (checkExist) {
    return res.status(401).send({ message: 'Username exists' });
  }

  const inserted = await model.User.create({
    firstName,
    lastName,
    phone,
    email,
    password: bcrypt.hashSync(password, 8),
    username,
  });

  const token = jwt.sign({ id: inserted.id }, 'clave123!', {
    expiresIn: 7200,
  });
  return res.status(201).json({ token: token });
};

module.exports = { login, register };
