const express = require("express");
const cors = require("cors");
const gameController = require("./controller/games-controller");
const scroesController = require("./controller/score-controller");
const commentsController = require("./controller/comment-controller");
const server = express();

server.use(cors());

server.use(express.json());

server.use("/api/games", gameController);
server.use("/api/scores", scroesController);
server.use("/api/comments", commentsController);

server.listen(3006, () => console.log("Listening on <http://localhost:3006>"));