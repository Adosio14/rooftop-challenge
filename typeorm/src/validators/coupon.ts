import Joi from "joi"

export const codeSchema = Joi.object({
    code: Joi.string().alphanum().min(8).max(8).required(),
    
});
export const emailSchema = Joi.object({
   email: Joi.string().email()
});
