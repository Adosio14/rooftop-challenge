import "reflect-metadata";
import { createConnection } from "typeorm";
import { Coupon } from "./entity/coupon";
import { Store } from "./entity/store";
import express from "express";
import 'dotenv/config';
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//routes
app.use(require('./routes/index'));

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
}).then(connection => {
    app.get('/stores', function(req,res){
        res.send('a')
    })

    app.listen(3000)
}).catch(error => console.log(error));