require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./start');

app.use(express.json());

const { insert, get } = require('./db/databaseConnection');
const router = require('./router/index')({ insert, get });
const migration = require('./migrateData');

app.use('/', router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})