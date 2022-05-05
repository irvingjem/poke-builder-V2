// import dependencies
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

// Express Port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// session
const sess = {
    secret: 'super secret secret',
    cookies: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

// Sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})

//Routes
app.use(routes);