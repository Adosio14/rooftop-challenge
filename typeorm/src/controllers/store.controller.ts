const {Pool} = require("pg");
import "dotenv/config";
import { Coupon } from "../entity/coupon";
import { Store } from "../entity/store";



new Pool({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "TamarindoAcido",
    database: "DataBase",
    entities: [
        Coupon,
        Store
    ],
    synchronize: true,
})



const getStores = (req,res) =>{
    res.send("stores")
}
module.exports = {
    getStores
}