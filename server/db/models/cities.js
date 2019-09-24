const Sequelize = require('sequelize')
const db = require('../db')

const Cities = db.define('cities', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://vignette.wikia.nocookie.net/startrek/images/b/b7/DC-Comics-logo.jpg/revision/latest?cb=20190411212636'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Cities
