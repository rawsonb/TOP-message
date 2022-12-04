var express = require('express');
var router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text:   req.body.postText,
    user: req.ip,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
