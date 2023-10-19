const express = require("express");
const listEditRouter = express.Router();

const tareas = [
  { id: 1, tarea: "Tarea 1", completa: false },
  { id: 2, tarea: "Tarea 2", completa: true },
];


listEditRouter.post("/crear-tarea", (req, res) => {
  const nuevaTarea = req.body; 
  tareas.push(nuevaTarea);
  res.json({ message: "Tarea creada con éxito", tarea: nuevaTarea });
});


listEditRouter.delete("/eliminar-tarea/:id", (req, res) => {
  const tareaId = parseInt(req.params.id, 10);
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
  if (tareaIndex !== -1) {
    tareas.splice(tareaIndex, 1);
    res.json({ message: "Tarea eliminada con éxito" });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});


listEditRouter.put("/actualizar-tarea/:id", (req, res) => {
  const tareaId = parseInt(req.params.id, 10);
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
  if (tareaIndex !== -1) {
    const nuevaTarea = req.body;
    tareas[tareaIndex] = { id: tareaId, ...nuevaTarea };
    res.json({ message: "Tarea actualizada con éxito", tarea: tareas[tareaIndex] });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

module.exports = listEditRouter;