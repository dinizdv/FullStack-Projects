import Logger from "../../config/logger";
import { AccountModel } from "../models/Account";
import { Request, Response } from 'express'
import mongoose from "mongoose";

export async function createAccount(req: Request, res: Response){
    try {
        const data = req.body
        const account = await AccountModel.create(data)
        res.status(201).json(account)
    } catch (e: any){
        Logger.error(`Error: ${e.message}`)
    }
}

export async function getAccountById(req: Request, res: Response){
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({ error: 'Invalid account ID.' })
        }

        const account = await AccountModel.findById(id)

        if (!account){
            res.status(404).json('The account does not exist.')
        }

        res.status(200).json(account)

    } catch (e: any){
        Logger.error(`Error: ${e.message}`)
        res.status(500).json({ error: 'Internal server error', details: e.message })
    }
}

export async function deleteAccount(req: Request, res: Response){
    try {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({ error: 'Invalid account id' })
        }

        const account = await AccountModel.findByIdAndDelete(id)

        if (!account){
            res.status(404).json({ error: 'Account not found.' })
        }

        Logger.info(`Deleted account with ID: ${id}`)
        res.status(204).json({ message: 'Account deleted successfully' })
    } catch (e: any){
        Logger.error(`Error: ${e.message}`)
        res.status(500).json({ error: 'Internal server error.' })
    }
}