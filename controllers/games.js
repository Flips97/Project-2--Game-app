const Game = require('../models/games')
const Company = require('../models/company')

module.exports = {
    index,
    new: newGame,
    create,
    show,
    edit,
    update
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

async function edit(req, res) {
    req.body.user= req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar

    const game = await Game.findOne({ _id: req.params.id, })
    
    if(!game) return res.redirect('/games')
    res.render('games/edit', { title: 'Edit Game', game } )
} 

async function update(req, res) {
    console.log(req.body)
    try {
       await Game.findOneAndReplace(
            { _id: req.params.id },
            req.body,
            { new: true }
        )        
        res.redirect(`/games/${req.params.id}`)        
    } catch(err) {
        console.log(err)       
    }
}
