require("dotenv").config();

const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams); // Can anyone help me ?
db.connect();

const getUserById = function(userId) {
  return db
    .query(`SELECT id, name, avatar
            FROM users
            WHERE id = $1;`, [userId])
    .then((result) => {
      const obj = result.rows[0].id;
      if (obj === undefined) {
        return null;
      } else {
        return result.rows[0];
      }
    })
    .catch((err) => {
      console.log('Error retrieving user', err.message);
    });
}

exports.getUserById = getUserById;

const getDestinationsByProvince = function(provinceName) {
  return db
  .query(`SELECT province_destinations.destination_id, destinations.name, destinations.wiki_name, destinations.google_place_id
          FROM province_destinations
          JOIN destinations ON province_destinations.destination_id = destinations.id
          WHERE province_destinations.province_id = (SELECT provinces.id
                                            FROM provinces
                                            WHERE provinces.short_name = $1);`, [provinceName])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log('Error retrieving all destinations', err.message);
  });
}

exports.getDestinationsByProvince = getDestinationsByProvince;

const getDestinationById = function(destId) {
  return db
    .query(`SELECT *
            FROM destinations
            WHERE id = $1;`, [destId])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log('Error retrieving destination by id', err.message);
    });
}

exports.getDestinationById = getDestinationById;

const getAllDestinations = function() {
  return db
    .query(`SELECT *
            FROM destinations;`, [])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('Error retrieving all destinations', err.message);
    });
}

exports.getAllDestinations = getAllDestinations;

const getFavoritesByUserId = function(userId) {
  return db
    .query(`SELECT user_favorites.destination_id, destinations.name, destinations.wiki_name, destinations.google_place_id
            FROM user_favorites
            JOIN destinations ON user_favorites.destination_id = destinations.id
            WHERE user_id = $1;`, [userId])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('Error retrieving user favorites', err.message);
    });
}

exports.getFavoritesByUserId = getFavoritesByUserId;

const getAllProvinces = function() {
  return db
    .query(`SELECT *
            FROM provinces;`, [])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('Error retrieving all provinces', err.message);
    });
}

exports.getAllProvinces = getAllProvinces;