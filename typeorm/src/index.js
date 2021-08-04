"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var storeRoutes_1 = __importDefault(require("./routes/storeRoutes"));
var couponRoutes_1 = __importDefault(require("./routes/couponRoutes"));
var app = express_1["default"]();
require("dotenv/config");
typeorm_1.createConnection().then(function (connection) {
    console.log(connection);
})["catch"](function (error) { return console.log(error); });
//middlewares
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
//routes
app.use(storeRoutes_1["default"], couponRoutes_1["default"]);
app.listen(4000);
console.log("escuchando de pana en el puerto 4k rey");
