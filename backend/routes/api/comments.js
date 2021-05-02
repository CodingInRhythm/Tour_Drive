const express = require("express");
const db = require("../../db/models/");
const sequelize = require('sequelize')

const router = express.Router();

router.get("/:id", async (req, res) => {
 
  const id = req.params.id;
  const comments = await db.User_Collection.findAll({
   where: {
        albumId: id
   },
   include: [db.Album, db.User ]
  });
  res.json(comments);
});

router.get("/:userid/:albumid", async(req, res) => {
  const userId = req.params.userid
  const albumId = req.params.albumid

  const comment = await db.User_Collection.findOne({
    where: {
      userId,
      albumId

    }
  })


  res.json(comment)
})

router.post("/", async (req, res) => {
  const { comment, userId, albumId } = req.body;


  const collection = await db.User_Collection.findOne(
      {where: {
          userId,
            albumId
      }
    });
         
          collection.comment = comment 
          
          await collection.save()
          
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
          
          res.json(collection);
  })


module.exports = router;
