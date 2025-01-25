import Logger from "../../config/logger";
import { AccountModel } from "../models/Account";
import { TransactionModel } from "../models/Transaction"
import { UserModel } from "../models/User";
import { Request, Response } from "express";
import mongoose from "mongoose";

export async function createTransaction(req: Request, res: Response){
    try {
        const data = req.body
        const transaction = await TransactionModel.create(data)
        res.status(201).json(transaction)
    } catch (e: any){
        Logger.error(`Error: ${e.message}`)
    }
}

export async function getTransactionById(req: Request, res: Response){
    try {
        const id = req.params.id

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({ error: 'Invalid transaction ID.' })
        }

        const transaction = await TransactionModel.findById(id)

        if (!transaction){
            res.status(400).json('The transaction does not exist.')
        }

        res.status(200).json(transaction)

    } catch (e: any){
        Logger.error(`Error: ${e.message}`)
        res.status(500).json({ error: 'Interval server error', details: e.messaage })
    }
}

export async function getTransactions(req: Request, res: Response){
    try {
        const accountId = req.params.id
        const account = await AccountModel.findById(accountId)
        if (!account){
            return res.status(404).json({ error: 'Account not found.' })
        }
        const transactions = await TransactionModel.find({ account_id: accountId })
        if (transactions.length === 0){
            return res.status(404).json({ error: 'Does not exist transactions.' })
        }

        res.status(200).json(transactions)
    } catch (e: any) {
        Logger.error(`Error: ${e.message}`)
        res.status(500).json({ error: 'Internal server error', details: e.message })
    }
}