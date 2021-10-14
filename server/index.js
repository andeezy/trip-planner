const express = require('express');
const path = require('path');
const helpers = require('../helpers');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/breweries', (req, res) => {
  helpers.getAll()
    .then((result) => {
      console.log('data', result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.get('/breweries/:name', (req, res) => {
  console.log('name ', req.params);
  helpers.getByName(req.params.name)
    .then((result) => {
      console.log('data', result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.get('/brewery/:city', (req, res) => {
  console.log('city ', req.params);
  helpers.getByCity(req.params.city)
    .then((result) => {
      console.log('data', result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.get('/breweries/:name/:city', (req, res) => {
  console.log('name ', req.params);
  helpers.getByNameAndCity(req.params)
    .then((result) => {
      console.log('data', result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Listening at localhost:${PORT}!`));