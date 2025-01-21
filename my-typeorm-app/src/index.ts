import "reflect-metadata";
import { AppDataSource } from "./data-source"

import express from "express";
import cors from "cors";

const app = express();

app.use(cors()) ;
app.use(express.json());

// rotas
import userRouter from "./routes/user.routes";
import clienteRouter from "./routes/cliente.routes";

app.use("/users", userRouter);
app.use("/clientes", clienteRouter);

AppDataSource.initialize().then(async () => {

    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    })

}).catch(error => console.log(error))
