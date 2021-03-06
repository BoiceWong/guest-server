require('dotenv').load();
const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server listening to', server.address().port);
});