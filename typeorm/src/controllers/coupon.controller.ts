import { Response, Request } from "express";
import "dotenv/config";
import { getRepository} from "typeorm";
import Coupon from "../entity/coupon"
import {codeSchema, emailSchema} from "../validators/coupon"

interface couponQueryParams{
    code?: string,
    customer_email?: string
}

export const getCoupon = async (req: Request<{},{},{},couponQueryParams>, res:Response)=>{
    const repository = getRepository(Coupon)
    try{
        const data = await repository.findOneOrFail({customer_email: req.query.customer_email, code: req.query.code})
        console.log(req.query)
         if(data){
            res.sendStatus(200)
        }
    }catch(err){
            res.sendStatus(404)
    }
}
export const postCoupon = async (req: Request<{},{},{},couponQueryParams>, res:Response)=>{
    const repository = getRepository(Coupon)
    const code: string = (<string>req.query.code)
    const randomDate = function(start, end){
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    const date = randomDate(new Date(2023, 0, 1), new Date())
    try{
        const validateCode = await codeSchema.validateAsync({code})
        if(validateCode){
            const coupon =new Coupon()
                coupon.code = code
                coupon.expiresAt = date
            repository.save(coupon)
            res.status(201).send({message: "Succesfully created coupon!" })
            
        }
    }catch(err){
            res.status(404).send({message: err})
        }
}
export const patchCoupon = async (req: Request<{},{},{},couponQueryParams>, res:Response)=>{
    const repository = getRepository(Coupon)
        const email: string = (<string>req.query.customer_email)
        console.log(req.query)
        console.log({email})
        const timeAndDate = new Date()
            const date = timeAndDate.getFullYear()+"-"+(timeAndDate.getMonth()+1)+"-"+timeAndDate.getDate()
            const time = timeAndDate.getHours()+":"+timeAndDate.getMinutes()+":"+timeAndDate.getSeconds()
        try{
            const validateEmail = await emailSchema.validateAsync({email})
            if(validateEmail){
                const assignedEmail = await repository.findOne({customer_email:email})
                if(assignedEmail){
                    res.status(422).send({message: `There is already a coupon assigned to ${email} `})
                    return;
                }
                try{
                    const findAvailableCoupon = await repository.findOneOrFail({where:{customer_email: null}})
                    const assign = new Coupon()
                        findAvailableCoupon.customer_email = email,
                        findAvailableCoupon.assignedAt = timeAndDate
                    repository.save(findAvailableCoupon)
                    res.status(201).send({message: `Succesfully assigned coupon to ${email}`})
                }catch(err){
                    res.status(422).send({message: "There is no available coupons!"})
                }
            }
        }catch(err){
            res.status(422).send(err)
        }
}  

