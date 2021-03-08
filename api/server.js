// build your server here and require it from index.js
const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

server.use((err, req, res, next) => {
    res.status(500).json({
      message: "We've encountered an error",
      error: err.message,
    })
  })
  

module.exports = server;