const express = require('express')
const router = express.Router()
const companiesCtrl = require('../controllers/companies')

router.get('/companies/new', companiesCtrl.new)



module.exports = router