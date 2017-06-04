const express = require('express');
const app = express();
const starter = require('./routes/starter')
const morgan = require('morgan');
const errorHandler = require('./error-handler');

app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('setting cors headers');
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] === 'https') next();
    else res.redirect(`https://${req.hostname}${req.url}`);
  });
};

app.use('/api/starter', starter);

app.use(errorHandler);

module.exports = app;
