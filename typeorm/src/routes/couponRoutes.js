"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var coupon_controller_1 = require("../controllers/coupon.controller");
router.get("/coupons", coupon_controller_1.getCoupon);
router.post("/coupons", coupon_controller_1.postCoupon);
exports["default"] = router;
