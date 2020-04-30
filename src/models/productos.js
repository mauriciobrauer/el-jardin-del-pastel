const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  categoria: String,
  nombre: String,
  descripcion: String,
  precio: String,
  tiempo: String,
  imagen: String,
});

module.exports = mongoose.model("productos", productSchema);
