const Game = require('../models/games')
const Company = require('../models/company')

module.exports = {
    index,
    new: newGame,
    create,
    show
}

async function index(req, res) {
    const games = await Game.find({})
    res.render('games/index', { title: 'All Games', games})
}

async function show(req, res) {
    const game = await Game.findById(req.params.id).populate('company')
    const companies = await Company.find({ _id: { $nin: game.company } }).sort('name')
    res.render('games/show', { title: 'Game Details', game, companies })
}

async function newGame(req, res) {
    res.render('games/new', { title: 'Add Game', errorMsg: '' })
}

async function create(req, res) {
    req.body.user= req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      try {
        const game = await Game.create(req.body)
        res.redirect('/games', )
    } catch(err) {
        console.log(err)
        res.render('games/new', { errorMsg: err.message })
    }
}