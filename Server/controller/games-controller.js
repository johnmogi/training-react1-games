const express = require("express");
const gamesLogic = require("../business-logic-layer/games-logic");
const router = express.Router();

// GET <http://localhost:3000/api/games>
router.get("/", async(request, response) => {
    try {
        const games = await gamesLogic.getAllGamesAsync();
        response.json(games);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET <http://localhost:3000/api/games/game/:id>
router.get("/game/:id", async(request, response) => {
    const id = +request.params.id;
    try {
        const game = await gamesLogic.getOneGamesAsync(id);
        response.json(game);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET <http://localhost:3000/api/games/category/:cat>
router.get("/category/:cat", async(request, response) => {
    const cat = request.params.cat;

    try {
        const games = await gamesLogic.getGamesFromCatAsync(cat);
        response.json(games);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// POST <http://localhost:3000/api/games/>
router.post("/", async(request, response) => {
    const info = request.body;
    try {
        const game = await gamesLogic.AddOneGameAsync(info);
        response.json(game);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// patch <http://localhost:3000/api/games/game/:gameID>
router.patch("/game/:gameID", async(request, response) => {
    const gameID = +request.params.gameID;
    const category = request.body.category
    try {
        const game = await gamesLogic.upGameCatAsync(gameID, category);
        response.json(game);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// put <http://localhost:3000/api/games/game/:gameID>
router.put("/game/:gameID", async(request, response) => {
    const gameID = +request.params.gameID;
    const sendInfo = request.body
    try {
        const game = await gamesLogic.updateGameAsync(gameID, sendInfo);
        response.json(game);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// DELETE <http://localhost:3000/api/games/:gameID>
router.delete("/game/:gameID", async(request, response) => {
    const gameID = +request.params.gameID;
    try {
        await gamesLogic.deleteOneGameAsync(gameID);
        response.sendStatus(204);
    } catch (err) {
        response.status(500).send(err.message);
    }
});


module.exports = router;