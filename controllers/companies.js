const Company = require('../models/company')
const Game = require('../models/games')

module.exports = {
    new: newCompany,
    create
}

async function newCompany(req, res) {
    const companies = await Company.find({}).sort('name')
    res.render('companies/new', { title: 'Add Company', companies })
}

async function create(req, res) {
    try {
        await Company.create(req.body)
    } catch(err) {
        console.log(err)
    }
    res.redirect('/companies/new')
}