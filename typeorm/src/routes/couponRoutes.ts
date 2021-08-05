import {Router} from "express"
const router = Router()
import {getCoupon,postCoupon,patchCoupon} from "../controllers/coupon.controller"

router.get("/coupons",getCoupon )
router.post("/coupons", postCoupon)
router.patch("/coupons", patchCoupon)
    

export default router