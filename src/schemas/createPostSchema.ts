import Joi from "joi";

const createPostSchema = Joi.object({
   imageUrl: Joi.string().uri().required(),
   userId: Joi.number().positive().greater(0).required(),
   tags: Joi.array().items(Joi.string()).required(),
   description: Joi.string().required(),
})

export default createPostSchema