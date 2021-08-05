import express from "express";
import {createConnection } from "typeorm";
import storeRoute from "./routes/storeRoutes"
import couponRoute from "./routes/couponRoutes"
const app = express();
import "dotenv/config";
createConnection().then(connection => {
}).catch(error => console.log(error));
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(storeRoute,couponRoute);


app.listen(4000);
