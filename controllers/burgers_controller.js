// Require Express
var express = require("express");
var app = express();
var burger = require("../models/burger.js");

app.get("/", function (req, res) {
    res.redirect("/index");
})

// GET route to get burgers from database
app.get("/index", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// POST route to create/add a burger
app.post("/burger/create", function (req, res) {
    burger.insertOne(req.body.name, function () {
        res.redirect("/index");
    });
});


app.post("/burger/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect("/index");
    });
});


// Export routes for server.js to use
module.exports = app;