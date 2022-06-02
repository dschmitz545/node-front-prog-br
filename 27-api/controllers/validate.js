const Joi = require('@hapi/joi');

const registerValidate = (data) =>{

    const schema = Joi.object({

        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(100),
        passwd: Joi.string().required().min(6).max(200),
        admin: Joi.boolean().required()
    })

    return schema.validate(data)
}

const loginValidate = (data) =>{

    const schema = Joi.object({

        email: Joi.string().required().min(3).max(100),
        passwd: Joi.string().required().min(6).max(200),
        admin: Joi.boolean().required()
    })

    return schema.validate(data)
}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;