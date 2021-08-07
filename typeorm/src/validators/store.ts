import Joi from "joi"

export const nameSchema = Joi.object({
    name: Joi.string().alphanum().required()
    
});
export const addressSchema = Joi.object({
   address: Joi.string().alphanum().required()
});
