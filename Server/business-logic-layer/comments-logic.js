const dal = require("../data/dal");

async function getAllCommentsAsync() {
    const sql = 'SELECT * FROM comments';
    const comments = await dal.executeAsync(sql);
    return comments;
}
async function getOneCommentAsync(id) {
    const sql = `SELECT * FROM comments where commentID = ${id}`;


    // const sql = `SELECT * FROM match WHERE matchID = ${id}`;
    const game = await dal.executeAsync(sql);

    return game;
}

// // INSERT INTO `comments` (`commentID`, `gameID`, `name`, `comment`, commentTime) VALUES (NULL, '2', 'Johnny', 'boring race, need more carrots');
async function AddOneCommentAsync(id, comment) {
    const sql = `INSERT INTO comments (gameID, name, comment, commentTime) VALUES (${id}, '${comment.name}', '${comment.comment}', '${comment.commentTime}')`;
    const comments = await dal.executeAsync(sql);
    return comments;
}


module.exports = {
    getAllCommentsAsync,
    getOneCommentAsync,
    AddOneCommentAsync

};