const seedUsers = require('./user-seeds.js');
// name of the function
const seedGuitars = require('./user-guitars.js')
const userSeed = require("./userSeed.js")

const sequelize = require('../config/connection')
console.log("connected")
async function seedAll() {
    await sequelize.sync({ force: true });
    console.log('Database synced');

    await userSeed();
    console.log("users added")
    // await seedUsers();
    // console.log('Users seeded');
    await seedGuitars();
    console.log('Guitars seeded');
}

seedAll()