/*-----------------------------------------------------------------
- User controller
-----------------------------------------------------------------*/
const User = require('./../models/User');

exports.list = (req, res) => {
    console.log(User);
    res.status(200).json({
        users: [],
    });
};
