const express = require("express");
const { default: UserProfilePage } = require("../../../frontend/src/components/UserProfilePage");
const db = require("../../db/models/");

const router = express.Router();

router.get("/:id", async (req, res) => {

  const id = req.params.id;
  const userCollection = await db.User.findByPk(id, {
    include: db.Album
  })
  res.json(data)});

router.post("/", async (req, res) => {
  const { albumId, userId } = req.body;

  const userCollection = await db.User_Collection.create({
    albumId,
    userId,
  });
  res.json({userCollection});
});

module.exports = router;
