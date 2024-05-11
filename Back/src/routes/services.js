const express = require("express");
const serviceSchema = require("../models/services");

const router = express.Router();

// create image
router.post("/services", (req, res) => {
  const service = serviceSchema(req.body);
  service
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all images
router.get("/services", (req, res) => {
  serviceSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a image
router.get("/services/:id", (req, res) => {
  const { id } = req.params;
  serviceSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a image
router.delete("/services/:id", (req, res) => {
  const { id } = req.params;
  serviceSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a image
router.put("/services/:id", (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;
  serviceSchema
    .updateOne({ _id: id }, { $set: { name, image, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;