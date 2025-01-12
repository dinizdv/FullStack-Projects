import { body } from "express-validator";

export const accountCreateValidation = () => {
    return [
        body('user_id').isString().withMessage('The user id is required.')
    ]
}