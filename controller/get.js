const getData = require('../operation/get');
const config = require('../config');

module.exports = (get) => {
    return async (req, res) => {
        try {
            const result = await getData(get);
            if (result?.length) {
                res.status(200).send(result);
            } else {
                res.status(200).send([]);
            }
        } catch (err){
            res.status(500).send(err.message);
        }
    }
}

