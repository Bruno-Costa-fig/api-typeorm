import {AppDataSource} from "../data-source"
import e, { Router, Request, Response } from "express";

import { Cliente } from "../entity/Cliente";

const clienteRouter = Router();

const clienteRepository = AppDataSource.getRepository(Cliente);

clienteRouter.get("/", async (req: Request, res: Response) => {
    const clientes = await clienteRepository.find({
        order: {
            nome: "ASC",
        },
        relations: ["user"],
    });
    res.status(200).json(clientes);
    return;
});

clienteRouter.post("/", async (req: Request, res: Response) => {
    try {
        const cliente = clienteRepository.create(req.body);
        await clienteRepository.save(cliente);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao salvar o cliente" });
        return;
    }
});

export default clienteRouter;