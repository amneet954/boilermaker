const Sequelize = require('sequelize')
const db = require('../db')

const Family = db.define('family', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://vignette.wikia.nocookie.net/startrek/images/b/b7/DC-Comics-logo.jpg/revision/latest?cb=20190411212636'
  }
})

module.exports = Family
