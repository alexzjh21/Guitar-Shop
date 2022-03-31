const express = require('express');
//const routes = require('./routes');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const https = require("https")
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'password',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./controllers/'));



sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

//api key
//503ab8adbbb760ceb95c8f074f106e2c-us10
//list id
//7fbc658dc5