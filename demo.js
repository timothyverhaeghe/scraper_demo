const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

// Configuration
const website = 'https://www.dmlights.be/deltalight_boxy_gu10_50w_alu_grijs~08XOG';
const priceSelector = 'span[itemprop="price"]';

// http://localhost:3000/ => Very simple endpoint
app.get('/', (req, res) => {
  request(website, (error, response, html) => {
    if (error) console.log(error);
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      const price = $(priceSelector).text();
      res.json({
        price,
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
