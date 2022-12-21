import joi from "joi";

const signInSchema = joi.object({
  email: joi.string().max(50).required(),
  password: joi.string().max(25).required(),
});
