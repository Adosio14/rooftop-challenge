import { Response, Request } from "express";
import "dotenv/config";
import { FindOperator, getRepository, Like } from "typeorm";
import Store from "../entity/store"
import { any } from "joi";


interface storeQueryParams{
    name?: string,
    page?: string;
}
interface nameInterface{
    where?: any,
    take: 10,
    skip : number
}
export const getStores = async (req: Request<{},{},{},storeQueryParams>, res:Response)=>{
    const name: string = (<string>req.query.name)
    const page: number = parseInt(<string>req.query.page)
    const repository = await getRepository(Store)
    console.log(typeof page)
    const options: nameInterface={
        where: {},
        take : 10,
        skip : 0,
        
    }
    if(page){
        options.skip = (page - 1) * options.take
    }
    if(name){
        options.where.name = Like("%"+name+"%")
    }
    console.log(options)
    try{    
        const data = await repository.find(options)
        res.status(200).send(data)
    }catch{
        res.status(404).send({message: "There is no stores!"})
    }
}

