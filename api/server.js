require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const database = require('../api/database');

const axios = require('axios');

const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/user/:id", (req, res) => {
  database.getUserById(req.params.id).then((results) => {
    res.json(results);
  });
});

app.get("/api/provinces", (req, res) => {
  database.getAllProvinces().then((results) => {
    res.json(results);
  });
});

app.get("/api/province/:province", (req, res) => {
  database.getDestinationsByProvince(req.params.province.toUpperCase()).then((results) => {
    res.json(results);
  });
});

app.get("/api/:user_id/favorites", (req, res) => {
  database.getFavoritesByUserId(req.params.user_id).then((results) => {
    res.json(results);
  });
});

app.get("/api/destinations", (req, res) => {
  database.getAllDestinations().then((results) => {
    res.json(results);
  });
});

app.get("/api/destinations/:id/description", (req, res) => {
  database.getDestinationById(req.params.id).then((results) => {
    axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${results.wiki_name}`).then((response) => {
      const title = response.data.title;
      const summary = response.data.extract;
      res.json({ title, summary });
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));