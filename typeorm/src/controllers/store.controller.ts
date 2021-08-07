import { Response, Request } from "express";
import "dotenv/config";
import { getRepository, Like } from "typeorm";
import Store from "../entity/store"
import {addressSchema, nameSchema} from "../validators/store"


interface storeQueryParams{
    id : number,
    address: string,
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
export const postStores = async (req: Request<{},{},{},storeQueryParams>, res:Response)=>{
    const repository = getRepository(Store)
    const address: string = (<string>req.query.address)
    const name : string =(<string>req.query.name)
    try{
        const validateCode = await nameSchema.validateAsync({name}) + await addressSchema.validateAsync({address})
        if(validateCode){
            const store =new Store()
                store.name = name
                store.address = address
            repository.save(store)
            res.status(201).send({message: "Succesfully created store!" })
            
        }
    }catch(err){
            res.status(422).send({message: err})
        }
}
export const deleteStores = async (req: Request<{},{},{},storeQueryParams>, res:Response)=>{
    const repository = await getRepository(Store)
    const id: number =(<number>req.query.id)
    try{
        const findId = await repository.findOneOrFail(id)
            repository.softDelete(id)
            res.status(201).send({message: "Store succesfully deleted!"})
    }catch(err){
        res.status(404).send({message: "Store does not exist!"})
    }
}

