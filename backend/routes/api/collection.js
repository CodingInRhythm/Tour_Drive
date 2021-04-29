const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log('here?')
  const id = req.params.id;
  const userCollection = await db.User.findByPk(id, {
    include: db.Album
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
