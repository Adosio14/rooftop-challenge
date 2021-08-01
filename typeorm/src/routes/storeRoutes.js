"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var getStores = require("../controllers/index.controller").getStores;
router.get("/stores", getStores);
exports["default"] = router;
