const User = require('./user')
const Heroes = require('./heroes')
const Cities = require('./cities')
const Family = require('./family')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Cities.hasMany(Heroes)
Heroes.belongsTo(Cities)
Family.hasMany(Heroes)
Heroes.belongsTo(Family)

module.exports = {
  User,
  Heroes,
  Cities,
  Family
}
