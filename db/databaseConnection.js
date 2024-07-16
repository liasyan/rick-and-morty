const fs = require("fs");
const { Client } = require("pg");
const tableName = 'grinch';

const config = {
    connectionString: "postgres://candidate:62I8anq3cFq5GYh2u4Lh@rc1b-r21uoagjy1t7k77h.mdb.yandexcloud.net:6432/db1",
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("/home/runner/.postgresql/root.crt").toString(),
    },
};

const client = new Client(config);

async function databaseConnection (){
    try {
        await client.connect();

        console.log("Connected to the database");

        await createTable();

        return client;
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

async function createTable() {
    const table = await getTable();

    if (table) {
        return {};
    }

     return client.query(`
            CREATE TABLE ${tableName} (
                id SERIAL PRIMARY KEY,
                name VarCHAR(50) NOT NULL,
                data jsonb
            );
        `);
}

async function getTable() {
   try {
       return await client.query(`
           SELECT id FROM ${tableName}
       `);
   } catch (err) {
       return null;
   }
}

async function insert(characters){
    for (const character of characters) {
        const { name } = character;
        const jsonCharacter = JSON.stringify(character);
        await client.query(
            `
                INSERT INTO ${tableName} (name, data)
                VALUES ($1, $2)
            `,
            [ name, jsonCharacter]
        );
    }
}

async function get(){
    const result = await client.query(`
            SELECT * FROM ${tableName} 
        `);

    return result?.rows || [];
}

async function dropTable(){
    try {
        return client.query(`
           DROP TABLE ${tableName};
       `);
    } catch (err) {
        return null;
    }
}

module.exports = { connect: databaseConnection(), insert, get };