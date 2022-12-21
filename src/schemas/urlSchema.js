import joi from "joi";

const urlSchema = joi.object({
  url: joi.string().required(),
});
