const router = require('express').Router();
const bodyParser = require('body-parser').json();

router
  .get('/', bodyParser, (req, res, next) => { //eslint-disable-line
    res.send({message: 'hello world'});
  })

module.exports = router;