require("dotenv").config();
const database = require('../api/database');
const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

database.getAllDestinations().then((results) => { console.log(results) });