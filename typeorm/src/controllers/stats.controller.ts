import {Response, Request} from "express"
import { getRepository, Not, IsNull } from "typeorm"
import Coupon from "../entity/coupon"

interface statsInterface{
    totalCoupons : number,
    totalAssignedCoupons : number,
    totalUnassignedCoupons : number
}
export const getStats = async (req:Request, res: Response) =>{
    const couponsResponse: statsInterface={
        totalCoupons : 0 ,
        totalAssignedCoupons : 0,
        totalUnassignedCoupons : 0

    }
    const repository = await getRepository(Coupon)
    const [allCoupons] = await repository.findAndCount({select : ["id"]})
    const [allAssignedCoupons] = await repository.findAndCount({where:{customer_email: Not(IsNull())}})
    const [allUnassignedCoupons] = await repository.findAndCount({where:{customer_email: IsNull()}})
    couponsResponse.totalCoupons = allCoupons.length
    couponsResponse.totalAssignedCoupons = allAssignedCoupons.length
    couponsResponse.totalUnassignedCoupons = allUnassignedCoupons.length
    res.status(200).send(couponsResponse)
}