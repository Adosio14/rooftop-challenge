import { Response, Request } from "express";
import "dotenv/config";
import { getRepository } from "typeorm";
import Coupon from "../entity/coupon"
import couponSchema from "../validators/coupon"
interface couponQueryParams{
    code?: string,
    customer_email?: string
}

export const getCoupon = async (req: Request<{},{},{},couponQueryParams>, res:Response)=>{
    const repository = getRepository(Coupon)
    const data = await repository.findOne({customer_email: req.query.customer_email, code: req.query.code})
    console.log(req.query)
    if(data){
        res.status(200).send({data})
    }else{
        res.status(404).send({message: "quien te conoce papa?"})
    }
}
export const postCoupon = async (req: Request<{},{},{},couponQueryParams>, res:Response)=>{
    const repository = getRepository(Coupon)
    const code: string = (<string>req.query.code)
    const data = await couponSchema.validateAsync({code})
    console.log(data)
    if(data){
       const randomDate = function(start, end){
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
        const date = randomDate(new Date(2023, 0, 1), new Date())
        const coupon =new Coupon()
            coupon.code = code
            coupon.expiresAt = date
        repository.save(coupon)
        res.status(200).send({data})
        console.log(data)
    }else{
        res.status(404).send({message: "quien te conoce papa?"})
        console.log(data)
    }
}
