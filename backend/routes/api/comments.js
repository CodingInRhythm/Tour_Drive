const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

// router.get("/:id", async (req, res) => {
//   console.log("here?");
//   const id = req.params.id;
//   const userCollection = await db.User.findByPk(id, {
//     include: db.Album,
//   });
//   res.json(userCollection);
// });

router.post("/", async (req, res) => {
  const { comment, userId, albumId } = req.body;
  console.log(comment)

  const collection = await db.User_Collection.findOne(
      {where: {
          userId,
            albumId
      }
        
  });
  collection.comment = comment 
  await collection.save
  console.log(collection)
  res.json(collection);
});

module.exports = router;
