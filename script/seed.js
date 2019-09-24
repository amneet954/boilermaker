'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Heroes} = require('../server/db/models')
const {Cities} = require('../server/db/models')
const {Family} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const cities = await Promise.all([
    Cities.create({
      name: 'Metropolis',
      address: 'USA',
      description: 'The City of Tomorrow!'
    }),
    Cities.create({
      name: 'Gotham',
      address: 'USA',
      description: 'The City That Never Sleeps'
    }),
    Cities.create({
      name: 'Keystone City',
      address: 'USA',
      description: 'The Fastest City in the Country'
    })
  ])

  const family = await Promise.all([
    Family.create({
      name: 'Superfamily'
    }),
    Family.create({
      name: 'Batfamily'
    }),
    Family.create({
      name: 'Flashfamily'
    })
  ])

  const heroes = await Promise.all([
    Heroes.create({
      heroName: 'Robin',
      imageUrl:
        'https://2.bp.blogspot.com/48Ba5Xsu41wWBe1lTxi0UejXQismS92NrjwpVvI1VI3F_rBiyAEduGz1uQax7M3ELX6uOGA2x444=s0',
      cityId: 2,
      familyId: 2
    }),
    Heroes.create({
      heroName: 'Superboy',
      imageUrl:
        'https://www.previewsworld.com/SiteImage/CatalogImage/STL106286?type=1',
      cityId: 1,
      familyId: 1
    }),
    Heroes.create({
      heroName: 'Impulse',
      imageUrl:
        'https://www.previewsworld.com/SiteImage/CatalogImage/STL106283?type=1',
      cityId: 3,
      familyId: 3
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
