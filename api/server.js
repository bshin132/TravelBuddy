require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8001;
const database = require('../api/database');

const axios = require('axios');

const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get id, name, and avatar of a user by user id
app.get("/api/user/:id", (req, res) => {
  database.getUserById(req.params.id).then((results) => {
    res.json(results);
  });
});

// Get all provinces
app.get("/api/provinces", (req, res) => {
  database.getAllProvinces().then((results) => {
    res.json(results);
  });
});

// Get destinations of a province by province id
app.get("/api/province/:provinceId", (req, res) => {
  database.getDestinationsByProvinceId(req.params.provinceId).then((results) => {
    const maxheight = 300;
    const getPhotoReferences = results.map((obj) => {
      const place_id = obj.google_place_id;
      return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos&key=${process.env.MAPS_API_KEY}`).then((response) => {
        const photos = response.data.result.photos;
        let photo_reference;
        for (const photoObj of photos) {
          if (photoObj.height >= maxheight && photoObj.height/photoObj.width <= 4/3) {
            photo_reference = photoObj.photo_reference;
            break;
          }
        }
        return photo_reference;
      });
    });
    Promise.all(getPhotoReferences).then(resp => {
      const getPhotos = resp.map((pr) => {
        return axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${pr}&maxheight=${maxheight}&key=${process.env.MAPS_API_KEY}`).then((respo) => {
          return respo.request.res.responseUrl;
        });
      });
      Promise.all(getPhotos).then(respons => {
        const destinations = results.map((obj, index) => {
          return {...obj, photo: respons[index]};
        });
        res.json(destinations);
      });
    });
  });
});

app.get("/api/:user_id/favorites", (req, res) => {
  database.getFavoritesByUserId(req.params.user_id).then((results) => {
    const maxheight = 300;
    const getPhotoReferences = results.map((obj) => {
      const place_id = obj.google_place_id;
      return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos&key=${process.env.MAPS_API_KEY}`).then((response) => {
        const photos = response.data.result.photos;
        let photo_reference;
        for (const photoObj of photos) {
          if (photoObj.height >= maxheight && photoObj.height/photoObj.width <= 4/3) {
            photo_reference = photoObj.photo_reference;
            break;
          }
        }
        return photo_reference;
      });
    });
    Promise.all(getPhotoReferences).then(resp => {
      const getPhotos = resp.map((pr) => {
        return axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${pr}&maxheight=${maxheight}&key=${process.env.MAPS_API_KEY}`).then((respo) => {
          return respo.request.res.responseUrl;
        });
      });
      Promise.all(getPhotos).then(respons => {
        const destinations = results.map((obj, index) => {
          return {...obj, photo: respons[index]};
        });
        res.json(destinations);
      });
    });
  });
});

app.get("/api/destinations/random", (req, res) => {
  database.getRandomDestination().then((result) => {
    const maxheight = 1080;
    const place_id = result.google_place_id;
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos&key=${process.env.MAPS_API_KEY}`).then((response) => {
      const photos = response.data.result.photos;
      let photo_reference;
      for (const photoObj of photos) {
        if (photoObj.height >= maxheight && photoObj.height/photoObj.width <= 4/3) {
          photo_reference = photoObj.photo_reference;
          break;
        }
      }
      axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo_reference}&maxheight=${maxheight}&key=${process.env.MAPS_API_KEY}`).then((respo) => {
        const photoUrl = respo.request.res.responseUrl;
        axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${result.wiki_name}`).then((response) => {
          const summary = response.data.extract;
          res.json({...result, photo: photoUrl, description: summary});
        });
      });
    });
  });
});

app.get("/api/destinations/search/:keyword", (req, res) => {
  database.getDestinationsByKeyword(req.params.keyword).then((results) => {
    const maxheight = 300;
    const getPhotoReferences = results.map((obj) => {
      const place_id = obj.google_place_id;
      return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos&key=${process.env.MAPS_API_KEY}`).then((response) => {
        const photos = response.data.result.photos;
        let photo_reference;
        for (const photoObj of photos) {
          if (photoObj.height >= maxheight && photoObj.height/photoObj.width <= 4/3) {
            photo_reference = photoObj.photo_reference;
            break;
          }
        }
        return photo_reference;
      });
    });
    Promise.all(getPhotoReferences).then(resp => {
      const getPhotos = resp.map((pr) => {
        return axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${pr}&maxheight=${maxheight}&key=${process.env.MAPS_API_KEY}`).then((respo) => {
          return respo.request.res.responseUrl;
        });
      });
      Promise.all(getPhotos).then(respons => {
        const destinations = results.map((obj, index) => {
          return {...obj, photo: respons[index]};
        });
        res.json(destinations);
      });
    });
  });
});

app.get("/api/destinations", (req, res) => {
  database.getAllDestinations().then((results) => {
    const maxheight = 300;
    const getPhotoReferences = results.map((obj) => {
      const place_id = obj.google_place_id;
      return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos&key=${process.env.MAPS_API_KEY}`).then((response) => {
        const photos = response.data.result.photos;
        let photo_reference;
        for (const photoObj of photos) {
          if (photoObj.height >= maxheight && photoObj.height/photoObj.width <= 4/3) {
            photo_reference = photoObj.photo_reference;
            break;
          }
        }
        return photo_reference;
      });
    });
    Promise.all(getPhotoReferences).then(resp => {
      const getPhotos = resp.map((pr) => {
        return axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${pr}&maxheight=${maxheight}&key=${process.env.MAPS_API_KEY}`).then((respo) => {
          return respo.request.res.responseUrl;
        });
      });
      Promise.all(getPhotos).then(respons => {
        const destinations = results.map((obj, index) => {
          return {...obj, photo: respons[index]};
        });
        res.json(destinations);
      });
    });
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