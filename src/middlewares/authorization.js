const jwt = require("jsonwebtoken");

const check = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send({
      message: "Token required",
    });
  }
  try {
    jwt.verify(token, "clave123!", (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Invalid token",
        });
      }
      req.userId = decoded.id; //aca setea el userId
      next();
    });
  } catch (err) {
    return res.status(500).send({ message: "Error"});
  }
};

const auth = { check };

module.exports = auth;
