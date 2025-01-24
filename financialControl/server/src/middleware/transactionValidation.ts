import { body } from "express-validator";

export const transactionCreateValidation = () => {
    return[
        body('account_id').isString().withMessage('The account ID is required.'),
        body('type').isString().withMessage('The type is required.'),
        body('category').isString().withMessage('The category ir required.').isLength({ min: 6 }).withMessage('The password need 6 minimum character.'),
        body('value').isNumeric().withMessage('The value is required.')
    ]
}