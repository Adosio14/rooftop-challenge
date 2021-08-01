import { Express } from "express";
import "dotenv/config";
import { response } from "express";
import { getRepository } from "typeorm";
import { Store } from "../entity/store";


const getStores = async (req, res)=>{
    await getRepository(Store)
    .find()
    .then((data)=>{
        res.status(200).json({
            data: data,
        });
    }).catch((err)=>{
        response.status(400).json({
            message: err,
        });
    })
}

module.exports = {
    getStores
}