const express = require("express");
const router = express.Router();

const Producto = require("../models/productos");

/*router.get("/", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.render("index", {
    tasks,
  });
});

router.post("/add", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect("/");
});

router.get("/done/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.render("edit", {
    task,
  });
  // res.redirect("/");
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Task.update({ _id: id }, req.body);
  res.redirect("/");
});*/

router.post("/add", async (req, res) => {
  const prod = new Producto(req.body);
  await prod.save();
  res.redirect("/");
});

router.get("/", async (req, res) => {
  const prod = await Producto.find();
  console.log(prod);
  res.render("index", {
    prod,
  });
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Producto.remove({ _id: id });
  res.redirect("/");
});

module.exports = router;
