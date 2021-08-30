const rateLimit = require("express-rate-limit");
const { ERROR } = require("../constants");

module.exports = {
  apiRequest: rateLimit({
      windowMs: 1 * 30 * 1000, // 1 minute
      max: 10 * (60 / 2), // limit each IP to 2 requests per windowMs (60 seconds) // 5 requests per second, so 300 requests per minute
      handler: (req, res) => {
        return res.status(429).json({ message: ERROR.RATE_LIMIT });
      }
  }),
  
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