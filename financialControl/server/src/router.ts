import { Router, Request, Response } from "express";
import { createUser, getAllUsers, getUserById } from "./controllers/userController";
import { deleteAccount, createAccount, getAccountById, editAccount } from "./controllers/accountController";
import { userCreateValidation } from "./middleware/userValidation";
import { transactionCreateValidation } from "./middleware/transactionValidation";
import { accountCreateValidation } from "./middleware/accountValidation";
import { createTransaction, getTransactionById } from "./controllers/transactionController";

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
.put('/account/:id', editAccount)
.delete('/account/:id', deleteAccount)

// transaction
.post('/transaction', transactionCreateValidation(), createTransaction)
.get('/transaction/:id', getTransactionById) // transaction id