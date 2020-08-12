const dal = require("../data/dal");

// const sql = 'INSERT INTO users VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ? ,null, 0)'
// await dal.executeAsync(sql, [user.firstName, user.lastName, user.username_email, user.password, user.city, user.street, user.id, user.isAdmin]);


async function getAllGamesAsync() {
    const sql = 'SELECT * FROM games';
    const games = await dal.executeAsync(sql);
    return games;
}
async function getOneGamesAsync(id) {
    const sql = `SELECT * FROM games where gameID = ${id}`;


    // const sql = `SELECT * FROM match WHERE matchID = ${id}`;
    const game = await dal.executeAsync(sql);

    return game;
}

async function getGamesFromCatAsync(cat) {
    const sql = `SELECT * FROM games where category = '${cat}'`;
    const games = await dal.executeAsync(sql);
    return games;
}

// INSERT INTO `games` (`gameID`, `name`, `date`) VALUES (NULL, 'derbi 1', '2020-08-01');

async function AddOneGameAsync(game) {
    const sql = `INSERT INTO games (name, date, category) VALUES ('${game.name}', '${game.date}', '${game.category}')`;
    const games = await dal.executeAsync(sql);
    return games;
}
// UPDATE `games` SET `category`= 'basketball' WHERE `gameID`= 1
async function upGameCatAsync(gameID, cat) {
    const sql = `UPDATE games SET category= '${cat}' WHERE gameID= ${gameID}`;
    const game = await dal.executeAsync(sql);
    return game;
}
// UPDATE games SET name= '${sendInfo.name}' , date= '${sendInfo.date}',category = ${sendInfo.cat} WHERE gameID= ${gameID}
async function updateGameAsync(gameID, sendInfo) {
    console.log(gameID)

    const sql = `UPDATE games SET name = '${sendInfo.name}' , date= '${sendInfo.date}', category = '${sendInfo.category}' WHERE gameID= ${gameID}`;
    const game = await dal.executeAsync(sql);
    return game;
}

async function deleteOneGameAsync(id) {
    const sql = `DELETE FROM games where gameID = ${id}`;
    const game = await dal.executeAsync(sql);
    return game;
}


module.exports = {
    getAllGamesAsync,
    getOneGamesAsync,
    getGamesFromCatAsync,
    AddOneGameAsync,
    upGameCatAsync,
    updateGameAsync,
    deleteOneGameAsync
};