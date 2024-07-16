const { Router } = require("express");
const router = Router();
const postController  = require('../controller/post');
const getController  = require('../controller/get');

module.exports = ({ insert, get }) => {
    //insert must be post request, but for easy checking with replit I will use get
    router.get('/insert/characters', postController(insert));
    router.get('/characters', getController(get));

    return router;
};

