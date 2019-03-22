var express = require("express");
var app = express();
var burger = require("../models/burger.js");

app.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {burgers: data};
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

app.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"],
        [req.body.name, false],function(result) {
        res.json({ id: result.insertId });
    });
});

app.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    burger.update(req.body, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

app.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res. status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = app;