const express = require('express');
const router = express.Router();

const FakeGame = [
    {
        id: 1,
        title: 'Sunny Side Down',
        desc: 'Egg Clicker',
        image_path: '/assets/sunny.png',
        download_link: 'youtube.com'
    }
];

router.get('/',(req, res) => {
    res.json(FakeGame);
})

module.exports = router;