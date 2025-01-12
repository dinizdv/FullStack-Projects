import { model, Schema } from "mongoose";

const AccountSchema = new Schema (
    {
        user_id: { type: String },
    }, {
        timestamps: true
    }
)

export const AccountModel = model('Account', AccountSchema)