const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

const connection = new Sequelize(dbConfig);


// Starts the connection with the database
Users.init(connection);


// Starts the association between models
Users.associate(connection.models);

module.exports = connection;