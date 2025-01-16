import { body } from "express-validator";

export const accountCreateValidation = () => {
    return [
        body('user_id').isString().withMessage('The user id is required.'),
        body('balance').isNumeric().withMessage('The balance is required.'),
        body('incomes').isNumeric().withMessage('The incomes is required.'),
        body('expenses').isNumeric().withMessage('The expenses is required.')
    ]
}