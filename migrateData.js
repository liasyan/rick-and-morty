const axios = require("axios");
const { insert } = require("./db/databaseConnection");

async function migrateData() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');

        const characters = response?.data?.results;
        await insert(characters);

        console.log("Characters inserted successfully");
    } catch (err) {
        console.error("Error fetching and inserting characters:", err.message);
    }
}

module.exports = migrateData();