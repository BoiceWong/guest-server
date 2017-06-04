const router = require('express').Router();
const bodyParser = require('body-parser').json();

router
  .get('/', bodyParser, (req, res, next) => { //eslint-disable-line
    res.send({message: 'hello Boice'});
  })
  .post('/', bodyParser, (req, res, next) => {
    res.send({message: 'did you remember to post something?'})
  })

module.exports = router;