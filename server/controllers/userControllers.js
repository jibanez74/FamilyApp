const User = require('../models/User');
const ErrorResponse = require('../services/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// allows an admin to create a new user
const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  return res.status(201).json({
    success: true,
    user,
  });
});

module.exports = {
  createUser,
};
