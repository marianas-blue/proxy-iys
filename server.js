require('newrelic');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const favicon = require('serve-favicon');
const proxy = require('http-proxy-middleware');
// const morgan = require('morgan');

const app = express();

// app.use(morgan('dev'));
app.use('/api', proxy({ target: 'http://ec2-18-222-221-247.us-east-2.compute.amazonaws.com', changeOrigin: true }));

app.use(cors());

app.use(compression());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/files', express.static(`${__dirname}/public`));

app.get('/products/:id', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('*', (req, res) => {
  res.redirect('/products/1');
})

app.listen(8080);