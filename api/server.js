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

app.get("/api/user/:userId/favorites", (req, res) => {
  database.getFavoritesByUserId(req.params.userId).then((results) => {
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

app.get("/api/destinations/:id/details", (req, res) => {
  let details = {};
  const maxheight = 300;
  const radius = 50000;
  database.getDestinationById(req.params.id).then((results) => {
    axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&exsentences=5&redirects=1&titles=${results.wiki_name}`).then((respo) => {
      const description = respo.data.query.pages[Object.keys(respo.data.query.pages)[0]].extract.replace(/\(listen\)/g,'').replace(/\(\)/g,'').replace(/\(\s\)/g,'').replace(/\(pronounced\s\)/g, '').replace(/\(\s/g, '(').replace(/\s\)/g, ')').replace(/\(;\s/g, '(');
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${results.google_place_id}&fields=geometry,photos,url,website&key=${process.env.MAPS_API_KEY}`).then((resp) => {
        const location = resp.data.result.geometry.location;
        const getPhotos = resp.data.result.photos.map((photoObj) => {
          const photo_reference = photoObj.photo_reference;
          return axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo_reference}&maxheight=${maxheight}&key=${process.env.MAPS_API_KEY}`).then((res) => {
            return res.request.res.responseUrl;
          });
        });
        Promise.all(getPhotos).then((response) => {
          axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&type=tourist_attraction&radius=${radius}&key=${process.env.MAPS_API_KEY}`).then((nearbySearch) => {
            const nearbyPlaces = nearbySearch.data.results.map((placeInfo) => {
              let rtObj = {};
              rtObj.name = placeInfo.name;
              rtObj.location = placeInfo.geometry.location;
              rtObj.place_id = placeInfo.place_id;
              rtObj.rating = placeInfo.rating;
              rtObj.address = placeInfo.vicinity;
              rtObj.url = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${placeInfo.place_id}`;
              return rtObj;
            }).slice(0, 6);
            database.getPackingListByDestinationId(req.params.id).then((packingList) => {
              details = {...results, description, location, photos: response, nearby_places: nearbyPlaces, packing_list: packingList};
              res.json(details);
            });
          });
        });
      });
    });
  });
});

app.post("/api/user/:userId/favorites/:destinationId", (req, res) => {
  database.addToUserFavorites(req.params.userId, req.params.destinationId).then((results) => {
    res.json(results);
  });
});

app.delete("/api/user/:userId/favorites/:destinationId", (req, res) => {
  database.deleteFromUserFavorites(req.params.userId, req.params.destinationId).then((results) => {
    res.json(results);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));