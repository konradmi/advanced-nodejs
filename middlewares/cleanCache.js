const { clearHash } = require('../services/cache')

module.exports = async (req, res, next) => {
  await next() // allow the route handler to run first and THEN execute clearHash
  clearHash(req.user.id)
}
