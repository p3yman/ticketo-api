/*-----------------------------------------------------------------
- User controller
-----------------------------------------------------------------*/
const User = require('./../models/User');

/**
 * List of users
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.list = async (req, res) => {
    try {
        const results = await User.find();
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};

/**
 * Create new user
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const results = await User.create(req.body);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};
