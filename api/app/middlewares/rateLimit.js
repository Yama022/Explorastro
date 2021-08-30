const rateLimit = require("express-rate-limit");
const { ERROR } = require("../constants");

module.exports = {
   createAccountLimiter: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 2, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_ACCOUNTS });
    },
  }),

  updateAvatar: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 2, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_AVATARS });
    }
  }),

  updateIllustration: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 2, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_ILLUSTRATIONS });
    }
  }),

  updateProfile: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 10, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_PROFILES });
    }
  }),

  updatePassword: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 3, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_PASSWORDS });
    }
  }),
  
  updateUsername: rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hour window
    max: 2, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_USERNAMES });
    }
  }),

  updateExploration: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 10, // start blocking after 2 requests
    handler: (req, res) => {
      return res.status(429).json({ message: ERROR.TOO_MANY_EXPLORATIONS });
    }
  }),
}