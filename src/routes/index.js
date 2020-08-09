const express = require("express");
const router = express.Router();
const multer = require("multer");

const Producto = require("../models/productos");

const formidable = require("formidable");

router.post("/upload", async (req, res) => {
  console.log(req.file);
  res.redirect("/admin");
});

router.post("/add", async (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  const prod = new Producto(req.body);
  await prod.save();
  console.log("El producto:" + prod);
  res.redirect("/admin");
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
  res.redirect("/admin");
});

router.get("/", async (req, res) => {
  res.sendfile(__dirname + "");
});

router.get("/admin", async (req, res) => {
  const prod = await Producto.find();
  console.log(prod);
  res.render("admin", {
    prod,
  });
});

module.exports = router;

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
