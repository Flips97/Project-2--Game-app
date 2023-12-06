const express = require('express')
const router = express.Router()
const companiesCtrl = require('../controllers/companies')

router.get('/companies/new', companiesCtrl.new)
router.post('/companies', companiesCtrl.create)



module.exports = router