import { Router, Request, Response } from "express";
import { createUser, getAllUsers, getUserById } from "./controllers/userController";
import { deleteAccount, createAccount, getAccountById } from "./controllers/accountController";
import { userCreateValidation } from "./middleware/userValidation";
import { accountCreateValidation } from "./middleware/accountValidation";

const router = Router()

export default router
.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API working!')
})

// user
.post('/user', userCreateValidation(), createUser)
.get('/users', getAllUsers)
.get('/user/:id', getUserById)

// account
.post('/account', accountCreateValidation(), createAccount)
.get('/account/:id', getAccountById)
.delete('/account/:id', deleteAccount)