const express = require("express");
const memberSchema = require("../models/members");

const router = express.Router();

// create image
router.post("/members", (req, res) => {
  const member = memberSchema(req.body);
  member
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all images
router.get("/members", (req, res) => {
  memberSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a image
router.get("/members/:id", (req, res) => {
  const { id } = req.params;
  memberSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a image
router.delete("/members/:id", (req, res) => {
  const { id } = req.params;
  memberSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a image
router.put("/members/:id", (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;
  memberSchema
    .updateOne({ _id: id }, { $set: { name, image, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;