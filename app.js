const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const helloRoutes = require('./routes/hello.routes')

const app = express();
const mongodb = require("./mongodb/mongodb.connect");

const db = require("./models");
// db.sequelize.sync();

mongodb.connect();

app.use(express.json());

app.use("/", helloRoutes);
app.use("/todos", todoRoutes);
app.use("/auth", authRoutes);
app.use("/student", studentRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.get("/", (req, res) => {
  res.json("Hello world!");
});

module.exports = app;
