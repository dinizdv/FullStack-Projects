import { body } from "express-validator";

export const userCreateValidation = () => {
    return[
        body('name').isString().withMessage('The name is required.'),
        body('email').isString().withMessage('The email is required.'),
        body('password').isString().withMessage('The password ir required.').isLength({ min: 6 }).withMessage('The password need 6 minimum character.')
    ]
}