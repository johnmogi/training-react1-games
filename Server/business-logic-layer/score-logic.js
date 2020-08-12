const dal = require("../data/dal");

async function getAllScoresAsync() {
  const sql = "SELECT * FROM `scores`";
  const scores = await dal.executeAsync(sql);
  return scores;
}
module.exports = { 
  getAllScoresAsync 
};
