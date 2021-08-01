import express from "express";
import { createConnection } from "typeorm";
import storeRoute from "./routes/storeRoutes"
const app = express();

createConnection(
    ).then(connection => {
        console.log(connection)
    }).catch(error => console.log(error));

    
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(storeRoute);


app.listen(4000);
