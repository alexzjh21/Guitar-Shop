const seedUsers = require('./user-seeds.js');

const sequelize = require('../config/connection')

async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('Database synced');
}