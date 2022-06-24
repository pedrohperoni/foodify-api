import joi from "joi";

const userEditSchema = joi.object({
  name: joi.string(),
  profileUrl: joi.string().uri(),
  backgroundUrl: joi.string().uri(),
  description: joi.string().max(140),
});

export default userEditSchema;
