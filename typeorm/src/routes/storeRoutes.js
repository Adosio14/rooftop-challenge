"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var store_controller_1 = __importDefault(require("../controllers/store.controller"));
router.get("/stores", store_controller_1["default"]);
exports["default"] = router;
