"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var coupon_1 = require("./entity/coupon");
var store_1 = require("./entity/store");
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var app = express_1["default"]();
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
    synchronize: true
}).then(function (connection) {
    var repository = connection.getRepository(store_1.Store.name);
    console.log(repository.find({ where: { name: "*" } }));
    app.get('/stores', function (req, res) {
        res.send('a');
    });
    app.listen(3000);
})["catch"](function (error) { return console.log(error); });
