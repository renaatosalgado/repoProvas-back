import joi from "joi";

const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})

export default signUpSchema;