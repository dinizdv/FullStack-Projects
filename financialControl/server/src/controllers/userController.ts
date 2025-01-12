import { UserModel } from "../models/User"
import { Request, Response } from "express"
import mongoose from "mongoose"
import Logger from "../../config/logger"
import { AccountModel } from "../models/Account"

export async function createUser(req: Request, res: Response){
    try {
        const data = req.body
        const user = await UserModel.create(data)
        res.status(201).json(user)
    }
    catch (e: any) {
        Logger.error(`Error: ${e.message}`)
    }
}

export async function getAllUsers(req: Request, res: Response){
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    }
    catch (e: any) {
        Logger.error(`Error: ${e.message}`)
    }
}

export async function getUserById(req: Request, res: Response){
    try {
        const id = req.params.id

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({ error: 'Invalid user ID.'})
        }

        const user = await UserModel.findById(id)

        if(!user){
            res.status(404).json('The user does not exist.')
        }

        res.status(200).json(user)
    }

    catch (e: any){
        Logger.error(`Error: ${e.message}`)
        res.status(500).json({ error: 'Internal server error', details: e.message })
    }
}