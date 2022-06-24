import joi from "joi";

const userEditSchema = joi.object({
  name: joi.string(),
  profileUrl: joi.string().uri(),
  backgroundUrl: joi.string().uri(),
  description: joi.string().max(140),
  handle: joi.string().max(16)
});

export default userEditSchema;
