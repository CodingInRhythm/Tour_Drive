const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get('/:id', async(req, res) => {
    const id = req.params.id
    const follows = await db.User.findByPk(id, {
        include: db.User_Follow
    })
    console.log(follows)
    return res.json({follows})

})


router.post('/', async(req, res) => {
    const { artistId, userId } = req.body
   
    const userFollows = await db.User_Follow.create({
        artistId,
        userId
    })
    res.json(userFollows)
})

module.exports = router;
