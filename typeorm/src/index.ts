import "reflect-metadata";
import { createConnection } from "typeorm";
import { Coupon } from "./entity/coupon";
import { Store } from "./entity/store";


createConnection({
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
    logging: false
}).then(connection => {
    console.log(connection)
}).catch(error => console.log(error));