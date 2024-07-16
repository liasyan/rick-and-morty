const post = require('../operation/insertData');
const config = require('../config');

module.exports = (insert) => {
    return async (req, res) => {
        try {
            await post(insert);

            res.send({ message: config.success_message });
        } catch (err){
            res.status(500).send(err.message);
        }
    }
}

