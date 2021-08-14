const { Router } = require("express");

const userRoutes = require("./user.route");
const authenticatedRoute = require("./authentication.route");

const loggedInRoutes = () => {
  const router = Router();
  router.use("/users", userRoutes);
  return router;
};

const authenticatedRoutes = () => {
  const router = Router();
  router.get("/", (req,res)=>res.send("Hi!"));
  router.use("/auth", authenticatedRoute);
  return router;
};

module.exports = { loggedInRoutes, authenticatedRoutes };

