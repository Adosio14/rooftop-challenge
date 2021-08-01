"use strict";
exports.__esModule = true;
var Pool = require("pg").Pool;
require("dotenv/config");
var coupon_1 = require("../entity/coupon");
var store_1 = require("../entity/store");
new Pool({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "TamarindoAcido",
    database: "DataBase",
    entities: [
        coupon_1.Coupon,
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
