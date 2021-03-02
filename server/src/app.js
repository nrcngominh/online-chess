const express = require("express");

module.exports = () => {
  const app = express();

  // Basic middlewares
  app.use(express.json());

  // Router
  app.get("/", (req, res) => {
    res.status(200).send({
      msg: "Hello World",
    });
  });

  return app;
};
