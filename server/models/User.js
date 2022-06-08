const mongoose = require(' mongoose');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// define schema for the user model
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, ' Name is required'],
      minLength: [2, ' Name must be at least 2 characters long'],
      maxLength: [70, ' Name must not be longer than 70 characters'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, ' Email is required'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        ' Email must be unique',
      ],
    },

    avatar: String,

    isAdmin: {
      type: Boolean,
      default: false,
    },

    password: {
      type: String,
      minLength: [10, 'Password must be at least 10 characters long'],
      maxLength: [128, 'Password must not be longer than 128 characters'],
    },

    resetPasswordToken: String,

    resetPasswordExpire: Date,

    confirmEmailToken: String,
    isEmailConfirmed: {
      type: Boolean,
      default: false,
    },

    twoFactorCode: String,

    twoFactorCodeExpire: Date,

    twoFactorEnable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Generate email confirm token
UserSchema.methods.generateEmailConfirmToken = function (next) {
  // email confirmation token
  const confirmationToken = crypto.randomBytes(20).toString('hex');

  this.confirmEmailToken = crypto
    .createHash('sha256')
    .update(confirmationToken)
    .digest('hex');

  const confirmTokenExtend = crypto.randomBytes(100).toString('hex');
  const confirmTokenCombined = `${confirmationToken}.${confirmTokenExtend}`;
  return confirmTokenCombined;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
