import Joi from "joi";

const foodURLschema = Joi.object({
   url: Joi.string().uri().required()
})

export default foodURLschema