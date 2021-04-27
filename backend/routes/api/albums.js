const express = require("express")
const db = require("../../db/models/")

const router = express.Router()

router.get("/:id", async(req, res) => {
    const id = req.params.id
    console.log('in here?')
    const album = await db.Album.findByPk(id)

    return res.json(
        album
    )
})

module.exports = router;