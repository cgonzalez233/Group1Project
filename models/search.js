const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model {}

Search.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
      pokemonType: {
        type: DataTypes.STRING,
    },
      strengths: {
        type: DataTypes.STRING
    },
      weakness: {
        type: DataTypes.STRING
    },
  },
  {
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.export = Search;