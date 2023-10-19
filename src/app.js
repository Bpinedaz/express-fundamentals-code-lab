const express = require("express");
const app = express();
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router"); 


app.use(express.json());


app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);


app.get("/", (req, res) => {
  res.send("Bienvenido a la aplicación de listas de tareas");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});