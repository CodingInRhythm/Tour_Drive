const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get('/', async(req, res) => 
res.json(data)
)

router.post('/', async(req, res) => {
    const { artistId, userId } = req.body
   
    const userFollows = await db.User_Follow.create({
        artistId,
        userId
    })
    res.json(userFollows)
})

module.exports = router;
