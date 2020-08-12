const express = require("express");
const scoreLogic = require("../business-logic-layer/score-logic");
const router = express.Router();

// GET <http://localhost:3000/api/scores>
router.get("/", async (request, response) => {
  try {
    const scores = await scoreLogic.getAllScoresAsync();
    response.json(scores);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
module.exports = router;
