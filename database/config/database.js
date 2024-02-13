const path = require('path');
const databaseName = 'UniSync.db';
const db = path.join(__dirname,'..',databaseName);
module.exports = {
    dialect: 'sqlite',
    host: 'localhost',
    storage: db,
    define:{
        timestamps: true,
        underscore: true,
    },
    logging: false,
}
