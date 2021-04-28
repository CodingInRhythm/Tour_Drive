const express = require("express")
const db = require("../../db/models/")

const router = express.Router()

router.get("/:id", async(req, res) => {
    const id = req.params.id
    
    const album = await db.Album.findByPk(id, {
        include: [db.Song, db.Artist]
    })

    return res.json(
        album
    )
})

module.exports = router;