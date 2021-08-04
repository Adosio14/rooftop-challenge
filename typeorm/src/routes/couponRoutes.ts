import {Router} from "express"
const router = Router()
import {getCoupon, postCoupon} from "../controllers/coupon.controller"

router.get("/coupons",getCoupon )
router.post("/coupons", postCoupon)
    

export default router