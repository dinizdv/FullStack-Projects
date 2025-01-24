import Logger from "../../config/logger";
import { TransactionModel } from "../models/Transaction";
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

// export async function getTransactions(req: Request, res: Response){
//     try {
//         // getting userId
//         const transactions = 
//     } catch (e: any){
//         Logger.error(`Error: ${e.message}`)
//     }
// }