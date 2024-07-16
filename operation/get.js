module.exports = async (get) => {
    try {
        return get();
    } catch (err) {
        console.error('Something went wrong :(', err.message);
        throw err.message;
    }
}