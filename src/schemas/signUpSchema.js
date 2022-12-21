import joi from "joi";

const signUpSchema = joi.object({
  name: joi.string().max(50).required(),
  email: joi.string().max(50).required(),
  password: joi.string().max(25).required(),
  confirmPassword: joi.string().max(25).required(),
});

export default signUpSchema;
