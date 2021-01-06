const User = require('./User');
const Teams = require('./Teams');
const Search = require('./Search');

User.hasMany( {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
