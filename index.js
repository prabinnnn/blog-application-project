require("dotenv").config();
const express = require("express");
const app = expres();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = Number(process.env.PORT);
const indexRouter = require("./routes");
app.use(morgan("dev"));
app.use(express.json());
app.use("/", indexRouter);
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.listen(PORT, () => {
  console.log("app is runing");
});
