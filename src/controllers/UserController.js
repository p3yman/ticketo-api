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
    const results = await User.paginate();
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
    const results = await User.create(req.body);
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * Get user single
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.single = async (req, res) => {
  try {
    const results = await User.findById(req.params.id);
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * Update user
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const results = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * Move a user to trash
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.trash = async (req, res) => {
  try {
    const results = await User.deleteById(req.params.id);
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * Restore a user from trash
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.restore = async (req, res) => {
  try {
    const results = await User.restore({ _id: req.params.id });
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * Delete user
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
exports.destroy = async (req, res) => {
  try {
    const results = await User.findByIdAndRemove(req.params.id);
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
