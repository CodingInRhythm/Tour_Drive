const express = require("express");
const db = require("../../db/models/");

const router = express.Router();

router.get('/:id', async(req, res) => {
const id = req.params.id

const follows = await db.User.findByPk(id, {
    include: db.Artist
    // include: {
    //     model: db.Artist,
    //     where: {
    //         artistId: db.Artist.id
    //     }
    // }

})
res.json(follows)
})

router.post('/', async(req, res) => {
    const { artistId, userId } = req.body
   
    const userFollows = await db.User_Follow.create({
        artistId,
        userId
    })
    res.json(userFollows)
})

router.delete('/', async(req, res) => {
    const { userId, artistId } = req.body

    await db.User_Follow.destroy({
        where: {
            userId,
            artistId
        }
    })
})

module.exports = router;
