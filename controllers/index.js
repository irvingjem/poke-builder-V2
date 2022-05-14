const router = require("express").Router();
const homeRoute = require("./home-route");
const apiRoutes = require("./api");

router.use("/", homeRoute);

router.use("/api", apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;