const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const middlewares = require("./middlewares");
const mongoose = require("mongoose");
const morgan = require("morgan");
const api = require("./routes");
const path = require("path");

dotenv.config();

const app = express();
const server = http.createServer(app);

// const db = process.env.MONGODB_URI;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then((db) => console.log("audio-expert DB connected!"))
//   .catch((err) => console.log(err));

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", api);

//? deploy
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = { server };
