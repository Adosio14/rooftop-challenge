import {Router} from "express"
const router = Router()
import {getCoupon,postCoupon,patchCoupon, deleteCoupon} from "../controllers/coupon.controller"

router.get("/coupons",getCoupon )
router.post("/coupons", postCoupon)
router.patch("/coupons", patchCoupon)
router.delete("/coupons", deleteCoupon)
    

export default router