const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get("/:id", async (req, res) => {
  
  const id = req.params.id;
  const userCollection = await db.User.findByPk(id, {
    include: [{
      
      model: db.Album,
      include: db.Artist
    },
  {model: db.User_Collection}]

  })
  res.json(userCollection)
});

router.post("/", async (req, res) => {
  const { albumId, userId } = req.body;

  const userCollection = await db.User_Collection.create({
    albumId,
    userId,
  });
  res.json({userCollection});
});

module.exports = router;
