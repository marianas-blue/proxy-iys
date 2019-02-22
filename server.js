const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(cors())

app.use(compression());

// // Static Bundles
// app.use('/comp/add_to_cart-chris', express.static(`${__dirname}/comp/add_to_cart-chris/client/dist`));
// app.use('/comp/product-carousel-pablo', express.static(`${__dirname}/comp/product-carousel-pablo/client/dist`));
// app.use('/comp/product-reviews-victor', express.static(`${__dirname}/comp/product-reviews-victor/client/dist`));
// app.use('/comp/product-gallery-summary', express.static(`${__dirname}/comp/product-gallery-summary/dist`));

app.use(express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(80);