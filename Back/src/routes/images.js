const express = require("express");
const imageSchema = require("../models/images");

const router = express.Router();

// create image
router.post("/images", (req, res) => {
  const image = imageSchema(req.body);
  image
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all images
router.get("/images", (req, res) => {
    imageSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a image
router.get("/images/:id", (req, res) => {
  const { id } = req.params;
  imageSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a image
router.delete("/images/:id", (req, res) => {
  const { id } = req.params;
  imageSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a image
router.put("/images/:id", (req, res) => {
  const { id } = req.params;
  const { url } = req.body;
  imageSchema
    .updateOne({ _id: id }, { $set: { url } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;