import {AppDataSource} from "../data-source"
import { Router, Request, Response } from "express";
import { User } from "../entity/User";

const userRouter = Router();

const userRepository = AppDataSource.getRepository(User);

userRouter.get("/", async (req: Request, res: Response) => {
    const users = await userRepository.find();
    res.status(200).json(users);
    return;
});

userRouter.post("/", async (req: Request, res: Response) => {
    try {
        const user = userRepository.create(req.body);
        await userRepository.save(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro ao salvar o usuário" });
        return;
    }
});

userRouter.get("/:id", async (req: Request, res: Response) => {

    try {

        const id = Number(req.params.id);

        const user = await userRepository.findOne({
            where: { id }
        });

        if(!user) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar os usuários" });
        return;
    }
});

export default userRouter;