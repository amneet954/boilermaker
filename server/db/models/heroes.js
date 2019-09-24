const Sequelize = require('sequelize')
const db = require('../db')

const Heroes = db.define('heroes', {
  heroName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://vignette.wikia.nocookie.net/startrek/images/b/b7/DC-Comics-logo.jpg/revision/latest?cb=20190411212636'
  }
})

module.exports = Heroes
