const Company = require('../models/company')
const Game = require('../models/games')

module.exports = {
    new: newCompany
}

async function newCompany(req, res) {
    const companies = await Company.find({}).sort('name')
    res.render('companies/new', { title: 'Add Company', companies })
}

