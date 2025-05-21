const express = require('express');
const router = express.Router();
const db = require("./db");


router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM games");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
})


router.post("/", async (req, res) => {
    const { name, description, download_url, cover_image } = req.body;

    try {
        const [result] = await db.query(
            "INSERT INTO games(name, description, download_url, cover_image) VALUES (?, ?, ?, ?)",
            [name, description, download_url, cover_image]
        );

        res.status(201).json({ message: "Game added", id: result.insertId });
    } catch (err) {
        console.error("Insertion Failed", err);
        res.status(500).send("Internal Server Error");
    }


})

module.exports = router;