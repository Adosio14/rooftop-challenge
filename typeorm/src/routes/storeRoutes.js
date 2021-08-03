"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var store_controller_1 = require("../controllers/store.controller");
router.get("/stores", store_controller_1.getStores);
exports["default"] = router;
