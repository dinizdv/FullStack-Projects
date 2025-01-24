import { model, Schema } from 'mongoose'

const TransactionSchema = new Schema(
    {
        account_id: { type: String, required: true },
        type: { type: String, required: true }, // income | expense
        category: { type: String, required: true, default: 'other' },
        value: { type: Number, required: true }
    }
)

export const TransactionModel = model('Transactions', TransactionSchema)