import { UserModel } from "../models/User"
import { Request, Response } from "express"
import mongoose from "mongoose"
import Logger from "../../config/logger"

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