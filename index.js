require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const { insert, get } = require('./db/databaseConnection');
const router = require('./router/index')({ insert, get });

app.use('/', router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})