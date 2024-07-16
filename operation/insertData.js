const axios = require("axios");

module.exports = async (insert) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');

        const characters = response?.data?.results;
        await insert(characters);

        console.log("Characters inserted successfully");
    } catch (err) {
        console.error("Error fetching and inserting characters:", err.message);
    }

    return {}
}