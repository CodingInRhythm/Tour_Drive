const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log("here?");
  const id = req.params.id;
  const comments = await db.User_Collection.findAll({
   where: {
        albumId: id
   },
   include: [db.Album, db.User ]
  });
  res.json(comments);
});

router.post("/", async (req, res) => {
  const { comment, userId, albumId } = req.body;
  console.log(albumId, userId)

  const collection = await db.User_Collection.findOne(
      {where: {
          userId,
            albumId
      }
    });
          console.log('before',collection.comment)
          collection.comment = comment 
          console.log('after', collection.comment);
          await collection.save()
          console.log(collection.comment)
          res.json(collection);
  })
  router.put("/", async (req, res) => {
    const { comment, userId, albumId} = req.body

    const collection = await db.User_Collection.findOne(
      {where: {
        albumId,
        userId
      }}
    )
    collection.comment = comment
    await collection.save()
    res.json(collection)
  })

  router.delete("/", async (req, res) => {
  const {userId, albumId } = req.body;

  const collection = await db.User_Collection.findOne(
      {where: {
          userId,
            albumId
      }
    });
          collection.comment = null 
          await collection.save()
          console.log(collection)
          res.json(collection);
  })


module.exports = router;
