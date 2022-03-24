console.log(__dirname)

const User = require(
    '../models/User'
);

const userData = [
    {
        username: 'guitarlover',
        email: 'guitarlover3@gmail.com',
        password: 'password'
    },
    {
        username: 'guitarprecious',
        email: 'guitarprecious3@gmail.com',
        password: 'password1'
    },
    {
        username: 'guitarline',
        email: 'guitarline3@gmail.com',
        password: 'password2'
    },
    {
        username: 'guitarbooks',
        email: 'guitarbooks3@gmail.com',
        password: 'password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
//exporting function

