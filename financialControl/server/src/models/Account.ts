import { model, Schema } from "mongoose";

const AccountSchema = new Schema (
    {
        user_id: { type: String },
        balance: { type: Number },
        incomes: { type: Number },
        expenses: { type: Number }
    }, {
        timestamps: true
    }
)

export const AccountModel = model('Account', AccountSchema)