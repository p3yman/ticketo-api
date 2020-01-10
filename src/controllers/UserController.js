/*-----------------------------------------------------------------
- User controller
-----------------------------------------------------------------*/
const User = require('./../models/User');

exports.list = async (req, res) => {
    const results = await User.paginate();
    res.status(200).json(results);
};
