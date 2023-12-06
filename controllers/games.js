const Game = require('../models/games')

module.exports = {
    index
}

async function index(req, res) {
    const games = await Game.find({})
    res.render('games/index', { title: 'All Games', games})
}