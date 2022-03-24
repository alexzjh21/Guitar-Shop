const seedUsers = require('./user-seeds.js');
// name of the function
// const seedGuitars = require('./user-guitars.js')

const sequelize = require('../config/connection')

async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('Database synced');

    await seedUsers();
    console.log('Users seeded');
}