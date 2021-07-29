"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var coupon_1 = require("./entity/coupon");
var store_1 = require("./entity/store");
typeorm_1.createConnection({
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
    synchronize: true,
    logging: false
}).then(function (connection) {
    console.log(connection);
})["catch"](function (error) { return console.log(error); });
