import { model, Schema } from "mongoose";

const AccountSchema = new Schema(
    {
        user_id: { type: String, required: true },
        incomes: { type: Number, default: 0 },
        expenses: { type: Number, default: 0 }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true } 
    }
);

AccountSchema.virtual("balance").get(function () {
    return this.incomes - this.expenses;
});

export const AccountModel = model('Account', AccountSchema);