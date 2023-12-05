var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/games',
    failureRedirect: '/games'
  }
))

router.get('/logout',function(req, res) {
  req.logout(function() {
    res.redirect('/games')
  })
})

module.exports = router;
