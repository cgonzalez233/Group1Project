// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Search extends Model {}

// Pokemon.init(
//   {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//       name: {
//         type:DataTypes.STRING,
//         allowNull: false
//     },
//       pokemonType: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     //  Given from array in matchup.js
//     //   strengths: {
//     //     type: DataTypes.STRING,
//     //     allowNull: false
//     // },
//     //   weakness: {
//     //     type: DataTypes.STRING,
//     //     allowNull: false
//     // },
//   },
//   {
//   sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'user',
//   }
// );

// module.export = Pokemon;