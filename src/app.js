const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

//connecting to db
mongoose
  .connect("mongodb://localhost/jardin-del-pastel")
  .then((db) => console.log("Connectado a la base de datos:" + db))
  .catch((err) => console.group(err));

//import routes
const indexRoutes = require("./routes/index");
//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//routes
app.use("/", indexRoutes);
//starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
