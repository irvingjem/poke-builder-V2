const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require("./controllers/");
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
