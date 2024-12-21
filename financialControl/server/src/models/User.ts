import { model, Schema } from "mongoose";

const userSchema = new Schema (
    {
        name: {type: String},
        email: {type: String},
        password: {type: String}
    },
    {
        timestamps: true // for update
    }
)

export const UserModel = model('User', userSchema)