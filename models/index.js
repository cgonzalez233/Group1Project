const User = require('./User');
const Teams = require('./Teams');
// const Pokemon = require('./Pokemon');

User.hasMany(Teams, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Teams.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Teams };
