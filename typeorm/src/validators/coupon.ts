import Joi from "joi"

const couponSchema = Joi.object({
    code: Joi.string().alphanum().min(8).max(8).required()
});

export default couponSchema