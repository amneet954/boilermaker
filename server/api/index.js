const router = require('express').Router()
// const heroesRouter = require('./heroes')
// const citiesRouter = require('./cities')
module.exports = router

router.use('/users', require('./users'))
router.use('/heroes', require('./heroes'))
router.use('/cities', require('./cities'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
