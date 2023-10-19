const express = require("express");
const listViewRouter = express.Router();

const tareasCompletas = [
  { id: 1, tarea: "Tarea 1", completa: true },
  { id: 2, tarea: "Tarea 2", completa: true },
];


const tareasIncompletas = [
  { id: 3, tarea: "Tarea 3", completa: false },
  { id: 4, tarea: "Tarea 4", completa: false },
];


listViewRouter.get("/completas", (req, res) => {
  res.json(tareasCompletas);
});


listViewRouter.get("/incompletas", (req, res) => {
  res.json(tareasIncompletas);
});

module.exports = listViewRouter;