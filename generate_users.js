const faker = require('faker');

var randomuserName = faker.internet.userName();
var randomEmail = faker.internet.email();
// const fs = require('fs');
const jsonData = jSON.stringify({
    randomuserName,
    randomEmail
});
console.log(jsonData);

// function generateUsers() {

//   let users = []

//   for (let id=1; id <= 100; id++) {

//     let userName = faker.internet.userName();
//     let email = faker.internet.email();

//     users.push({
//         "id": id,
//         "username": userName,
//         "email": email
//     });
//   }

//   return { "data": users }
// }

// let dataObj = generateUsers();

// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));