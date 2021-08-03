import { Response, Request } from "express";
import "dotenv/config";
import { getRepository } from "typeorm";
import Store from "../entity/store"


export const getStores = async (req: Request, res:Response)=>{
    getRepository(Store)
    .find()
    .then((data)=>{
        res.status(200).json({
            data: data,
        });
    }).catch((err)=>{
        res.status(400).json({
            message: err,
        });
    })
}

