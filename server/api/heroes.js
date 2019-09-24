const router = require('express').Router()
const {Heroes} = require('../db/models')
const {Cities} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const heroes = await Heroes.findAll()
    res.json(heroes)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const hero = await Heroes.findByPk(id, {
      include: [{model: Cities}]
    })
    res.json(hero)
  } catch (error) {
    next(error)
  }
})

router.post('/addHero', async (req, res, next) => {
  try {
    const body = req.body
    const newHero = await Heroes.create(body)
    res.json(newHero)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const hero = await Heroes.findByPk(id)
    await hero.destroy()
    res.status(204)
  } catch (error) {
    next(error)
  }
})
