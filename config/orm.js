// Requiring connection.js for ORM communication with the database
var connection = require("..//config/connection.js");

// Methods needed to retrieve and store data from the MySQL database
var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (burgerID, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{
                devoured: true
            }, {
                id: burgerID
            }],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    }
};

// Export the orm object
module.exports = orm;