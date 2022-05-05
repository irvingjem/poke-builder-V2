// import connections
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Express Port
const app = express();
const PORT = process.env.PORT || 3001;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routes
app.use(routes);


// Sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})