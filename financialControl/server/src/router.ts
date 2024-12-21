import { Router, Request, Response } from "express";
import { createUser, getAllUsers } from "./controllers/userController";
import { userCreateValidation } from "./middleware/userValidation";

const router = Router()

export default router
.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API working!')
})

// account
.post('/user', userCreateValidation(), createUser)
.get('/users', getAllUsers)