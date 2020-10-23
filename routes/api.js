const express = require("express");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

const Bookmark = require("../models/bookmark");
const Tags = require("../models/tags");

router.use(cors());

router.post("/addBookmark", (req, res) => {
  const link = req.body.link;
  const title = req.body.title;
  const timeCreated = req.body.timeCreated;
  const publisher = req.body.publisher;

  const newBookmark = new Bookmark({ link, title, timeCreated, publisher });
  newBookmark
    .save()
    .then(() => res.json("Bookmark Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

 

router.delete("/deleteBookmark/:id", (req, res) => {
  const id = req.params.id;
  Bookmark.findByIdAndDelete(id)
    .then(() => res.json("Bookmark deleted"))
    .catch((err) => res.json("Error: " + err));
});

router.post("/addTag", (req, res) => {
  const title = req.body.title;
  const timeCreated = req.body.timeCreated;

  const newTag = new Tags({title, timeCreated });
  newTag
    .save()
    .then(() => res.json("Tag Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/deleteTag/:id", (req, res) => {
  const id = req.params.id;
  Tags.findByIdAndDelete(id)
    .then(() => res.json("Tag deleted"))
    .catch((err) => res.json("Error: " + err));
});

router.post("/addTagtoBookmark", async (req,res) => {
  const tagID = req.body.tagID;
  const bookmarkID = req.body.bookmarkID;

  let tagName="";
  await Tags.findById(tagID).then(tag => {
    tagName = tag.title;
  }).catch(err => res.json("Error: " + err));

  await Bookmark.findById(bookmarkID).then((bookmark) => {
    bookmark.tags.push(tagName);
    bookmark
        .save()
        .then(() => res.json("Tag Added to Bookmark"))
        .catch((err) => res.status(400).json("Error: " + err));
  }).catch(err => res.json("Error: " + err )); 
})

router.post("/removeTagfromBookmark", async (req,res) => {
  const tagID = req.body.tagID;
  const bookmarkID = req.body.bookmarkID;

  let tagName="";
  await Tags.findById(tagID).then(tag => {
    tagName = tag.title;
  }).catch(err => res.json("Error: " + err));

  await Bookmark.findById(bookmarkID).then(bookmark => {
    var index = bookmark.tags.indexOf(tagName);
     if (index > -1) {
    bookmark.tags.splice(index, 1);
    }
    bookmark
        .save()
        .then(() => res.json("Tag Removed from Bookmark"))
        .catch((err) => res.status(400).json("Error: " + err));
  }).catch(err => res.json("Error: " + err )); 
})

router.get("/getBookmarks", (req,res) => {
  Bookmark.find().then(bookmark => {
    res.json(bookmark)
  }).catch(err => res.json("Error: " + err));
})

router.get("/getTags", (req,res) => {
  Tags.find().then(tag => {
    res.json(tag)
  }).catch(err => res.json("Error: " + err));
})

module.exports = router;
