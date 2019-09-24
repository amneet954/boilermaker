const router = require('express').Router()
const {Cities} = require('../db/models')
const {Heroes} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cities = await Cities.findAll()
    res.json(cities)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const city = await Cities.findById(id, {
      include: [{model: Heroes}]
    })
    res.json(city)
  } catch (error) {
    next(error)
  }
})

// router.put('/:id', async (req, res, next) => {
//   const id = req.params.id
//   const name = req.body.name
//   const address = req.body.address
//   const description = req.body.description

//   const updated = await Cities.update({
//     where: {}
//   })
//   res.json(updated)
// })

router.post('/addCity', async (req, res, next) => {
  try {
    const body = req.body
    const city = await Cities.create(body)
    res.json(city)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const deleteIt = await Cities.findByPk(id)
    await deleteIt.destroy()
    res.status(204)
  } catch (error) {
    next(error)
  }
})
