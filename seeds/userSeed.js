// connect to db
const User = require(
    '../models/User'
);
const faker = require("faker")

let userData = () => {
    let users = []
    for (let index = 0; index < 100; index++) {
        users.push({
            username: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.name.title()
        })
    }
    return users
}


const userSeed = () => User.bulkCreate(userData());

module.exports = userSeed;