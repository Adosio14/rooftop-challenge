"use strict";
exports.__esModule = true;
var Pool = require("pg").Pool;
require("dotenv/config");
var store_1 = require("../entity/store");
new Pool({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "TamarindoAcido",
    database: "DataBase",
    entities: [
        store_1.Store
    ],
    synchronize: true
});
var getStores = function (req, res) {
    res.send("stores");
};
module.exports = {
    getStores: getStores
};
