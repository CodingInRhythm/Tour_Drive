const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get("/", async (req, res) => res.json(data));

router.post("/", async (req, res) => {
  const { albumId, userId } = req.body;

  const userCollection = await db.User_Collection.create({
    albumId,
    userId,
  });
  res.json({userCollection});
});

module.exports = router;
