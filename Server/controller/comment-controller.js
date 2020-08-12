const express = require("express");
const commentLogic = require("../business-logic-layer/comments-logic");
const router = express.Router();

// GET <http://localhost:3000/api/comments>
router.get("/", async(request, response) => {
    try {
        const comments = await commentLogic.getAllCommentsAsync();
        response.json(comments);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET <http://localhost:3000/api/comments/comment/:id>
router.get("/comment/:id", async(request, response) => {
    const id = +request.params.id;
    try {
        const comment = await commentLogic.getOneCommentAsync(id);
        response.json(comment);
    } catch (err) {
        response.status(500).send(err.message);
    }
});


// // POST <http://localhost:3000/api/comments/game/:id>
router.post("/game/:id", async(request, response) => {
    const id = +request.params.id;
    const info = request.body;
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDay() + 1;


    const timeNow = `${year}-${month}-${day}`
    console.log(timeNow)
    info.commentTime = timeNow

    try {
        const game = await commentLogic.AddOneCommentAsync(id, info);
        response.json(game);
    } catch (err) {
        response.status(500).send(err.message);
    }
});



module.exports = router;