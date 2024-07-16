const { Router } = require("express");
const router = Router();
const postController  = require('../controller/post');
const getController  = require('../controller/get');

module.exports = ({ insert, get }) => {
    router.post('/insert/characters', postController(insert));
    router.get('/characters', getController(get));

    return router;
};

