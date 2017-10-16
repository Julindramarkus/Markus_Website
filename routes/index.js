var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/profile', function(req, res, next){
  res.render('profile', {title: 'Profile'});
});

router.post('/profile', function(req, res, next){
  res.redirect('profile', {title: 'Profile'});
});

router.get('/intentions', function(req, res, next){
  res.render('intentions', {title: 'Intentions'});
});

router.post('/intentions', function(req, res, next){
  res.redirect('intentions', {title: 'Intentions'});
});

router.get('/educations', function(req, res, next){
  res.render('education', {title: 'Educations'});
});

router.post('/educations', function(req, res, next){
  res.render('education', {title: 'Educations'});
});

router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'World'});
});

router.post('/contact', function(req, res, next){
  res.render('contact', {title: 'World'});
});

router.get('/fifth', function(req, res, next){
  res.render('spiritual', {title: 'Spiritual'});
});

router.post('/fifth', function(req, res, next){
  res.render('spiritual', {title: 'Spiritual'});
});
module.exports = router;
