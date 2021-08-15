const Joi = require('joi');

const schema = Joi.object({
    firstname: Joi.string()
        .min(2)
        .max(50)
        .required(),
    
    lastname: Joi.string()
        .min(2)
        .max(50)
        .required(),
    
    username: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),

    email: Joi.string()
        .email()
        .min(3)
        .max(50)
        .required(),
    
    password: Joi.string()
        .min(6)
        .max(50),
    
    password_confirmation: Joi.valid(Joi.ref('password')),

    avatar_url: Joi.string()
        .uri(),
    
    bio: Joi.string()
        .min(2)
        .max(500),
    
    city: Joi.string()
        .min(2)
        .max(50),
    
    zipcode: [
        Joi.string(),
        Joi.number()
    ],
    
    twitter: Joi.string()
        .min(2)
        .max(50),
    
    instagram: Joi.string()
        .min(2)
        .max(50),
    
    facebook: Joi.string()
        .min(2)
        .max(50),
    
    tiktok: Joi.string()
        .min(2)
        .max(50),
    
    astrobin: Joi.string()
        .min(2)
        .max(50),
    
    role: Joi.string()
        .valid('unverified', 'user', 'admin')
        .required(),
    
    created_at: Joi.date(),
    updated_at: Joi.date(),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    refresh_token: [
        Joi.string(),
        Joi.number()
    ]

})
    .xor('password', 'access_token')
    .xor('password', 'refresh_token')
    .with('password', 'password_confirmation')
    .with('access_token', 'refresh_token')

module.exports = schema;